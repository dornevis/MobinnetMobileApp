using System.Net;
using MobinnetMobileAppLibrary.Helper;
using MobinnetMobileAppLibrary.Responses;
using RestSharp;

namespace MobinnetMobileAppLibrary
{
    public class SendRegistrationVerificationCodeHandler
    {
        private readonly HelperHandler _helperHandler;
        private string _phoneNumber;

        public SendRegistrationVerificationCodeHandler()
        {
            _helperHandler = new HelperHandler();
        }

        public SendRegistrationVerificationCodeHandler SetData(string phoneNumber)
        {
            _phoneNumber = phoneNumber;
            return this;
        }

        public SendRegistrationVerificationCodeResponse Process()
        {
            var response = new SendRegistrationVerificationCodeResponse();
            var sendRegistrationVerificationCodeResponseCode = SendRegistrationVerificationCode();
            return response.ReturnWithCode(MessageHelper.Message(sendRegistrationVerificationCodeResponseCode));
        }

        #region Private methods

        private MessageHelper.Code SendRegistrationVerificationCode()
        {
            var (mobinEcareAntiforgery, requestVerificationToken) = _helperHandler.GetMobinEcareAntiforgery();
            while (true)
            {
                var (restClient, restRequest) = HelperMethods.CreateApiCaller("Account/SendRegistrationVerificationCode", Method.POST);
                restRequest.AddRestRequestParameters(Header.ContentTypeFormUrlEncoded);
                restRequest.AddRequestVerificationToken(requestVerificationToken);
                restRequest.AddCookieHeader(mobinEcareAntiforgery);
                restRequest.AddParameter("undefined", "cellphone=" + _phoneNumber, ParameterType.RequestBody);
                var response = restClient.Execute(restRequest);
                if (response.StatusCode == HttpStatusCode.OK)
                {
                    if (response.Content.Contains("این شماره قبلا در سایت ثبت شده است،در صورت فراموشی رمزعبور به بخش بازیابی رمزعبور مراجعه کنید"))
                    {
                        return MessageHelper.Code.SendRegistrationVerificationCodeDuplicatePhoneNumber;
                    }
                    return response.Content.Contains("\"status\":true") ?
                        MessageHelper.Code.SendRegistrationVerificationCodeSuccess:
                        MessageHelper.Code.SendRegistrationVerificationCodeFailed;
                }
            }
        }

        #endregion
    }
}
