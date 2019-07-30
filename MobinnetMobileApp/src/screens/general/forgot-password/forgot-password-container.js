import { connect } from 'react-redux';
import ForgotPasswordView from './forgot-password-view';

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
 
});

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordView);