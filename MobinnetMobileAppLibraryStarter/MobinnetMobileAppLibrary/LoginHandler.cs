using System.Net;
using MobinnetMobileAppLibrary.Helper;
using MobinnetMobileAppLibrary.Responses;
using RestSharp;

namespace MobinnetMobileAppLibrary
{
    public class LoginHandler
    {
        private readonly HelperHandler _helperHandler;
        private string _phoneNumber;
        private string _password;

        public LoginHandler()
        {
            _helperHandler = new HelperHandler();
        }

        public LoginHandler SetData(string phoneNumber, string password)
        {
            _phoneNumber = phoneNumber;
            _password = password;
            return this;
        }

        public LoginResponse Process()
        {
            var response = new LoginResponse();
            var loginResponseCode = Login();
            return response.ReturnWithCode(MessageHelper.Message(loginResponseCode));
        }

        #region Private methods

        private MessageHelper.Code Login()
        {
            var (mobinEcareAntiforgery, requestVerificationToken) = _helperHandler.GetMobinEcareAntiforgery();
            while (true)
            {
                var (restClient, restRequest) = HelperMethods.CreateApiCaller("Account/RedirectoLogin", Method.POST);
                restRequest.AddRestRequestParameters(Header.Timeout, Header.ContentTypeJson);
                restRequest.AddRequestVerificationToken(requestVerificationToken);
                restRequest.AddCookieHeader(mobinEcareAntiforgery);
                restRequest.AddParameter("undefined", "{\"Email\":\"" + _phoneNumber + "\",\"Password\":\"" + _password + "\"}\r\n", ParameterType.RequestBody);
                var response = restClient.Execute(restRequest);
                if (response.StatusCode == HttpStatusCode.InternalServerError)
                {
                    return MessageHelper.Code.LoginFailed;
                }
                if (response.StatusCode == HttpStatusCode.OK)
                {
                    if (response.Content.Contains("نام کاربری یا رمز عبور اشتباه می باشد"))
                    {
                        return MessageHelper.Code.LoginInvalidData;
                    }
                    return response.Content.Contains("\"status\":true") ?
                                           MessageHelper.Code.LoginSuccess :
                                           MessageHelper.Code.LoginFailed;
                }
            }
        }

        #endregion
    }
}
