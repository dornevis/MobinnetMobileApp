using RestSharp;

namespace MobinnetMobileAppLibrary.Helper
{
    public static class HelperMethods
    {
        public static (RestClient, RestRequest) CreateApiCaller(string path, Method method)
        {
            var restClient = new RestClient(StaticVariables.BaseApi + path);
            var restRequest = new RestRequest(method);
            return (restClient, restRequest);
        }
    }
}
