using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MobinnetMobileAppApi.Helpers;
using MobinnetMobileAppApi.Requests;
using MobinnetMobileAppLibrary;

namespace MobinnetMobileAppApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : BaseApiController
    {
        private readonly LoginHandler _loginHandler;
        private readonly RegisterHandler _registerHandler;
        private readonly SendRegistrationVerificationCodeHandler _sendRegistrationVerificationCodeHandler;
        private readonly ChangePasswordHandler _changePasswordHandler;
        private readonly SendPasswordRecoveryVerificationCodeHandler _sendPasswordRecoveryVerificationCodeHandler;

        public UserController()
        {
            _loginHandler = new LoginHandler();
            _registerHandler = new RegisterHandler();
            _sendRegistrationVerificationCodeHandler = new SendRegistrationVerificationCodeHandler();
            _changePasswordHandler = new ChangePasswordHandler();
            _sendPasswordRecoveryVerificationCodeHandler = new SendPasswordRecoveryVerificationCodeHandler();
        }

        [AllowAnonymous]
        [IgnoreAntiforgeryToken]
        [HttpPost("[action]")]
        [ActionName("Login")]
        public IActionResult Login([FromBody] LoginRequest request)
        {
            return ExecuteService(() => _loginHandler.SetData(request.PhoneNumber, request.Password).Process());
        }

        [AllowAnonymous]
        [IgnoreAntiforgeryToken]
        [HttpPost("[action]")]
        [ActionName("SendPasswordRecoveryVerificationCode")]
        public IActionResult SendPasswordRecoveryVerificationCode([FromBody] SendPasswordRecoveryVerificationCodeRequest request)
        {
            return ExecuteService(() => _sendPasswordRecoveryVerificationCodeHandler.SetData(request.PhoneNumber).Process());
        }

        [AllowAnonymous]
        [IgnoreAntiforgeryToken]
        [HttpPost("[action]")]
        [ActionName("ChangePassword")]
        public IActionResult ChangePassword([FromBody] ChangePasswordRequest request)
        {
            return ExecuteService(() => _changePasswordHandler.SetData(request.PhoneNumber, request.MobileToken, request.NewPassword).Process());
        }

        [AllowAnonymous]
        [IgnoreAntiforgeryToken]
        [HttpPost("[action]")]
        [ActionName("Register")]
        public IActionResult Register([FromBody] RegisterRequest request)
        {
            return ExecuteService(() => _registerHandler.SetData(request.PhoneNumber, request.FullName, request.MobileToken, request.Password).Process());
        }

        [AllowAnonymous]
        [IgnoreAntiforgeryToken]
        [HttpPost("[action]")]
        [ActionName("SendRegistrationVerificationCode")]
        public IActionResult SendRegistrationVerificationCode([FromBody] RegisterRequest request)
        {
            return ExecuteService(() => _sendRegistrationVerificationCodeHandler.SetData(request.PhoneNumber).Process());
        }
    }
}