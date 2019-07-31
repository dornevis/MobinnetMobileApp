using System.Net;
using MobinnetMobileAppLibrary.Helper;
using MobinnetMobileAppLibrary.Responses;
using RestSharp;

namespace MobinnetMobileAppLibrary
{
    public class SendPasswordRecoveryVerificationCodeHandler
    {
        private readonly HelperHandler _helperHandler;
        private string _phoneNumber;

        public SendPasswordRecoveryVerificationCodeHandler()
        {
            _helperHandler = new HelperHandler();
        }

        public SendPasswordRecoveryVerificationCodeHandler SetData(string phoneNumber)
        {
            _phoneNumber = phoneNumber;
            return this;
        }

        public SendPasswordRecoveryVerificationCodeResponse Process()
        {
            var response = new SendPasswordRecoveryVerificationCodeResponse();
            var sendRegistrationVerificationCodeResponseCode = SendPasswordRecoveryVerificationCode();
            return response.ReturnWithCode(MessageHelper.Message(sendRegistrationVerificationCodeResponseCode));
        }

        #region Private methods

        private MessageHelper.Code SendPasswordRecoveryVerificationCode()
        {
            var (mobinEcareAntiforgery, requestVerificationToken) = _helperHandler.GetMobinEcareAntiforgery();
            while (true)
            {
                var (restClient, restRequest) = HelperMethods.CreateApiCaller("Account/SendPasswordRecoveryVerificationCode", Method.POST);
                restRequest.AddRestRequestParameters(Header.ContentTypeFormUrlEncoded);
                restRequest.AddRequestVerificationToken(requestVerificationToken);
                restRequest.AddCookieHeader(mobinEcareAntiforgery);
                restRequest.AddParameter("undefined", "cellphone=" + _phoneNumber, ParameterType.RequestBody);
                var response = restClient.Execute(restRequest);
                if (response.StatusCode == HttpStatusCode.InternalServerError)
                {
                    return MessageHelper.Code.SendPasswordRecoveryVerificationCodeFailed;
                }
                if (response.StatusCode == HttpStatusCode.OK)
                {
                    if (response.Content.Contains("شماره موبایل شناسایی نشد"))
                    {
                        return MessageHelper.Code.SendPasswordRecoveryVerificationCodeInvalidPhoneNumber;
                    }
                    return response.Content.Contains("\"status\":true") ?
                        MessageHelper.Code.SendPasswordRecoveryVerificationCodeSuccess :
                        MessageHelper.Code.SendPasswordRecoveryVerificationCodeFailed;
                }
            }
        }

        #endregion
    }
}
