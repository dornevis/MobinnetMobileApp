import { combineReducers } from 'redux';
import { SplashReducer, LoginReducer, RegisterReducer, RegisterTokenReducer, ForgotPasswordReducer, ResetPasswordReducer, HelpReducer, ProfileReducer } from './general';
import { CreateAccountReducer } from './ecare';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    formReducer,
    SplashReducer, LoginReducer, RegisterReducer, RegisterTokenReducer, ForgotPasswordReducer, ResetPasswordReducer, HelpReducer, ProfileReducer,
    CreateAccountReducer
});