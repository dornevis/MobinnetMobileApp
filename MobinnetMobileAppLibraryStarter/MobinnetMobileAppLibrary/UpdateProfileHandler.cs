using System.Collections.Generic;
using System.Net;
using MobinnetMobileAppLibrary.Helper;
using MobinnetMobileAppLibrary.Responses;
using RestSharp;

namespace MobinnetMobileAppLibrary
{
    public class UpdateProfileHandler
    {
        private readonly HelperHandler _helperHandler;
        private string _phoneNumber;
        private string _password;
        private string _fullName;
        private string _newPassword;

        public UpdateProfileHandler()
        {
            _helperHandler = new HelperHandler();
        }

        public UpdateProfileHandler SetData(string phoneNumber, string password, string fullName, string newPassword)
        {
            _phoneNumber = phoneNumber;
            _password = password;
            _fullName = fullName;
            _newPassword = newPassword;
            return this;
        }

        public UpdateProfileResponse Process()
        {
            var response = new UpdateProfileResponse();
            var (status, cookies, requestVerificationToken) = _helperHandler.GetUserCookies(_phoneNumber, _password);
            if (!status)
            {
                return response.ReturnWithCode(MessageHelper.Message(MessageHelper.Code.UpdateProfileInvalidUser));
            }
            var updateProfileResponseCode = UpdateProfile(cookies, requestVerificationToken);
            return response.ReturnWithCode(MessageHelper.Message(updateProfileResponseCode));
        }

        #region Private methods

        private MessageHelper.Code UpdateProfile(IList<RestResponseCookie> cookies, string requestVerificationToken)
        {
            while (true)
            {
                var (restClient, restRequest) = HelperMethods.CreateApiCaller("Profile/Update", Method.POST);
                restRequest.AddRestRequestParameters(Header.ContentTypeJson, Header.Timeout);
                restRequest.AddRequestVerificationToken(requestVerificationToken);
                restRequest.AddCookies(cookies);
                restRequest.AddParameter("undefined", "{\n\t\"XPassword\":\"" + _newPassword + "\",\n\t\"XName\":\"" + _fullName + "\"\n}", ParameterType.RequestBody);
                var response = restClient.Execute(restRequest);
                if (response.StatusCode == HttpStatusCode.InternalServerError)
                {
                    return MessageHelper.Code.UpdateProfileFailed;
                }
                if (response.StatusCode == HttpStatusCode.OK)
                {
                    return response.Content.Contains("\"status\":true") ?
                        MessageHelper.Code.UpdateProfileSuccess :
                        MessageHelper.Code.UpdateProfileFailed;
                }
            }
        }

        #endregion
    }
}
