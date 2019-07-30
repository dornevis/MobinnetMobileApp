import { connect } from 'react-redux';
import RegisterTokenView from './register-token-view';

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
 
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterTokenView);