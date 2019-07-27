using System.Collections.Generic;
using System.Linq;
using MobinnetMobileAppLibrary.Helper;
using RestSharp;

namespace MobinnetMobileAppLibrary
{
    public class HelperHandler
    {
        public (string, string) GetMobinEcareAntiforgery()
        {
            while (true)
            {
                var (restClient, restRequest) = HelperMethods.CreateApiCaller("Account/Login", Method.GET);
                restRequest.AddRestRequestParameters(Header.Timeout);
                var responseGet = restClient.Execute(restRequest);
                if (responseGet.Cookies.Any(d => d.Name == "Mobin.eCare.Antiforgery") && !string.IsNullOrEmpty(responseGet.Content))
                {
                    var mobinECareAntiforgery = responseGet.Cookies.First(d => d.Name == "Mobin.eCare.Antiforgery").Value;
                    var htmlDocument = responseGet.Content.LoadContentForParser();
                    var requestVerificationToken = htmlDocument.GetElementbyId("RequestVerificationToken").Attributes["value"].Value;
                    return (mobinECareAntiforgery, requestVerificationToken);
                }
            }
        }

        public (bool, IList<RestResponseCookie> cookies, string) GetUserCookies(string phoneNumber, string password)
        {
            var (mobinEcareAntiforgery, requestVerificationToken) = GetMobinEcareAntiforgery();

            while (true)
            {
                var (restClient, restRequest) = HelperMethods.CreateApiCaller("Account/RedirectoLogin", Method.POST);
                restRequest.AddRestRequestParameters(Header.Timeout, Header.ContentTypeJson);
                restRequest.AddRequestVerificationToken(requestVerificationToken);
                restRequest.AddCookieHeader(mobinEcareAntiforgery);
                restRequest.AddParameter("undefined", "{\"Email\":\"" + phoneNumber + "\",\"Password\":\"" + password + "\"}\r\n", ParameterType.RequestBody);
                var response = restClient.Execute(restRequest);
                if (!string.IsNullOrEmpty(response.Content))
                {
                    if (!response.Content.Contains("\"status\":true"))
                    {
                        return (false, null, "");
                    }

                    var (cookies, token) = GetCookies(response.Cookies);
                    return (true, cookies, token);
                }
            }
        }

        #region Private methods

        private static (List<RestResponseCookie>, string) GetCookies(IList<RestResponseCookie> loginCookies)
        {
            while (true)
            {
                var (restClient, restRequest) = HelperMethods.CreateApiCaller("Profile/UserProfile", Method.GET);
                restRequest.AddRestRequestParameters(Header.Timeout);
                restRequest.AddCookies(loginCookies);
                var response = restClient.Execute(restRequest);
                if (!string.IsNullOrEmpty(response.Content))
                {
                    var authCookies = response.Cookies.ToList();
                    var htmlDocument = response.Content.LoadContentForParser();
                    var requestVerificationToken = htmlDocument.GetElementbyId("RequestVerificationToken").Attributes["value"].Value;
                    return (authCookies, requestVerificationToken);
                }
            }
        }

        #endregion
    }
}
