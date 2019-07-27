using MobinnetMobileAppLibrary;

namespace MobinnetMobileAppLibraryStarter
{
    class Program
    {
        static void Main(string[] args)
        {
            UpdateProfile();
        }

        private static void UpdateProfile()
        {
            var updateProfileHandler =
                new UpdateProfileHandler()
                .SetData("09013120129", "a123789", "موجو دین", "m123456");
            var response = updateProfileHandler.Process();
        }

        private static void LoginHistory()
        {
            var loginHistoryHandler =
                new LoginHistoryHandler()
                .SetData("09013120129", "a123321");
            var response = loginHistoryHandler.Process();
        }

        private static void SendPasswordRecoveryVerificationCode()
        {
            var sendPasswordRecoveryVerificationCodeHandler =
                new SendPasswordRecoveryVerificationCodeHandler()
                .SetData("09013120129");
            var response = sendPasswordRecoveryVerificationCodeHandler.Process();
        }

        private static void ChangePassword()
        {
            var changePasswordHandler =
                new ChangePasswordHandler()
                .SetData("09013120129", "78220", "a123321");
            var response = changePasswordHandler.Process();
        }

        private static void SendRegistrationVerificationCode()
        {
            var sendRegistrationVerificationCodeHandler =
                new SendRegistrationVerificationCodeHandler()
                .SetData("09013120129");
            var response = sendRegistrationVerificationCodeHandler.Process();
        }

        private static void Register()
        {
            var registerHandler =
                new RegisterHandler()
                .SetData("01900001000", "مجید", "54785", "a123456");
            var response = registerHandler.Process();
        }
    }
}
