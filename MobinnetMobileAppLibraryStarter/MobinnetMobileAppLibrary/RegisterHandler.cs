using System.Net;
using MobinnetMobileAppLibrary.Helper;
using MobinnetMobileAppLibrary.Responses;
using RestSharp;

namespace MobinnetMobileAppLibrary
{
    public class RegisterHandler
    {
        private readonly HelperHandler _helperHandler;
        private string _phoneNumber;
        private string _fullName;
        private string _mobileToken;
        private string _password;

        public RegisterHandler()
        {
            _helperHandler = new HelperHandler();
        }

        public RegisterHandler SetData(string phoneNumber, string fullName, string mobileToken, string password)
        {
            _phoneNumber = phoneNumber;
            _fullName = fullName;
            _mobileToken = mobileToken;
            _password = password;
            return this;
        }

        public RegisterResponse Process()
        {
            var response = new RegisterResponse();
            var registerResponseCode = Register();
            return response.ReturnWithCode(MessageHelper.Message(registerResponseCode));
        }

        #region Private methods

        private MessageHelper.Code Register()
        {
            var (mobinEcareAntiforgery, requestVerificationToken) = _helperHandler.GetMobinEcareAntiforgery();
            while (true)
            {
                var (restClient, restRequest) = HelperMethods.CreateApiCaller("Account/Register", Method.POST);
                restRequest.AddRestRequestParameters(Header.ContentTypeFormUrlEncoded);
                restRequest.AddRequestVerificationToken(requestVerificationToken);
                restRequest.AddCookieHeader(mobinEcareAntiforgery);
                restRequest.AddParameter("undefined",
                    "verificationCode=" + _mobileToken + "&" +
                    "xName=" + _fullName + "&" +
                    "xPassword=" + _password + "&" +
                    "cellphone=" + _phoneNumber, ParameterType.RequestBody);
                var response = restClient.Execute(restRequest);
                if (response.StatusCode == HttpStatusCode.InternalServerError)
                {
                    return MessageHelper.Code.RegisterFailed;
                }
                if (response.StatusCode == HttpStatusCode.OK)
                {
                    if (response.Content.Contains("کد فعال سازی شناسایی نشد"))
                    {
                        return MessageHelper.Code.RegisterInvalidMobileToken;
                    }
                    return response.Content.Contains("\"status\":true") ?
                        MessageHelper.Code.RegisterSuccess :
                        MessageHelper.Code.RegisterFailed;
                }
            }
        }

        #endregion
    }
}
