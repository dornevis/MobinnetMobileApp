import { connect } from 'react-redux';
import CreateAccountView from './create-account-view';

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
 
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccountView);