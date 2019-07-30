import { connect } from 'react-redux';
import ResetPasswordView from './reset-password-view';

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
 
});

export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswordView);