using System.Collections.Generic;

namespace MobinnetMobileAppLibrary.Helper
{
    public static class DtoResponseExtensions
    {
        public static T ReturnWithCode<T>(this T response, KeyValuePair<int, string> message) where T : DtoResponse
        {
            response.ResultCode = message.Key;
            response.Message = message.Value;
            return response;
        }

        public static void SetResultCode<T>(this T response, KeyValuePair<int, string> message) where T : DtoResponse
        {
            response.ResultCode = message.Key;
            response.Message = message.Value;
        }
    }
}