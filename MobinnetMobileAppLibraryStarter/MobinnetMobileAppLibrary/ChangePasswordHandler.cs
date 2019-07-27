using System.Net;
using MobinnetMobileAppLibrary.Helper;
using MobinnetMobileAppLibrary.Responses;
using RestSharp;

namespace MobinnetMobileAppLibrary
{
    public class ChangePasswordHandler
    {
        private readonly HelperHandler _helperHandler;
        private string _phoneNumber;
        private string _mobileToken;
        private string _newPassword;

        public ChangePasswordHandler()
        {
            _helperHandler = new HelperHandler();
        }

        public ChangePasswordHandler SetData(string phoneNumber, string mobileToken, string newPassword)
        {
            _phoneNumber = phoneNumber;
            _mobileToken = mobileToken;
            _newPassword = newPassword;
            return this;
        }

        public ChangePasswordResponse Process()
        {
            var response = new ChangePasswordResponse();
            var changePasswordResponseCode = ChangePassword();
            return response.ReturnWithCode(MessageHelper.Message(changePasswordResponseCode));
        }

        #region Private methods

        private MessageHelper.Code ChangePassword()
        {
            var (mobinEcareAntiforgery, requestVerificationToken) = _helperHandler.GetMobinEcareAntiforgery();
            while (true)
            {
                var (restClient, restRequest) = HelperMethods.CreateApiCaller("Account/ChangePassword", Method.POST);
                restRequest.AddRestRequestParameters(Header.ContentTypeFormUrlEncoded);
                restRequest.AddRequestVerificationToken(requestVerificationToken);
                restRequest.AddCookieHeader(mobinEcareAntiforgery);
                restRequest.AddParameter("undefined",
                    "verificationCode=" + _mobileToken + "&" +
                    "newPassword=" + _newPassword + "&" +
                    "cellphone=" + _phoneNumber, ParameterType.RequestBody);
                var response = restClient.Execute(restRequest);
                if (response.StatusCode == HttpStatusCode.OK)
                {
                    if (response.Content.Contains("کد فعال سازی شناسایی نشد"))
                    {
                        return MessageHelper.Code.ChangePasswordInvalidMobileToken;
                    }
                    return response.Content.Contains("\"status\":true") ?
                        MessageHelper.Code.ChangePasswordSuccess :
                        MessageHelper.Code.ChangePasswordFailed;
                }
            }
        }

        #endregion
    }
}
