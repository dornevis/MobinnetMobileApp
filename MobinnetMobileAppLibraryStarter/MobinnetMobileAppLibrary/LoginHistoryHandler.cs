using System.Collections.Generic;
using System.Linq;
using System.Net;
using MobinnetMobileAppLibrary.Helper;
using MobinnetMobileAppLibrary.Responses;
using RestSharp;

namespace MobinnetMobileAppLibrary
{
    public class LoginHistoryHandler
    {
        private readonly HelperHandler _helperHandler;
        private string _phoneNumber;
        private string _password;

        public LoginHistoryHandler()
        {
            _helperHandler = new HelperHandler();
        }

        public LoginHistoryHandler SetData(string phoneNumber, string password)
        {
            _phoneNumber = phoneNumber;
            _password = password;
            return this;
        }

        public LoginHistoryResponse Process()
        {
            var response = new LoginHistoryResponse();
            var (status, cookies, requestVerificationToken) = _helperHandler.GetUserCookies(_phoneNumber, _password);
            if (!status)
            {
                return response.ReturnWithCode(MessageHelper.Message(MessageHelper.Code.LoginHistoryInvalidUser));
            }
            var (loginHistoryResponseCode, items) = LoginHistory(cookies);
            if (loginHistoryResponseCode == MessageHelper.Code.LoginHistorySuccess)
            {
                response.Items = items;
            }
            return response.ReturnWithCode(MessageHelper.Message(loginHistoryResponseCode));
        }

        #region Private methods

        private (MessageHelper.Code, List<LoginHistoryItem>) LoginHistory(IList<RestResponseCookie> cookies)
        {
            while (true)
            {
                var (restClient, restRequest) = HelperMethods.CreateApiCaller("Profile/LoginHistory", Method.GET);
                restRequest.AddCookies(cookies);
                var response = restClient.Execute(restRequest);
                if (response.StatusCode == HttpStatusCode.InternalServerError)
                {
                    return (MessageHelper.Code.LoginHistoryFailed, null);
                }
                if (response.StatusCode == HttpStatusCode.OK)
                {
                    var loadContentForParser = response.Content.LoadContentForParser();
                    var loginHistoryRowElements = loadContentForParser.DocumentNode.SelectNodes("//body//tbody//tr");
                    var loginHistoryItems = loginHistoryRowElements.ToList().Select(d => new LoginHistoryItem
                    {
                        DayName = d.GetElementInnerValue("//td[1]"),
                        Date = d.GetElementInnerValue("//td[2]"),
                        Time = d.GetElementInnerValue("//td[3]"),
                        Ip = d.GetElementInnerValue("//td[4]"),
                        Status = d.GetElementInnerValue("//td[5]")
                    }).ToList();
                    return (MessageHelper.Code.LoginHistorySuccess, loginHistoryItems);
                }
            }
        }

        #endregion
    }
}
