import { connect } from 'react-redux';
import LoginView from './login-view';

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
 
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);