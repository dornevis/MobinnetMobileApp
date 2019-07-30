import { connect } from 'react-redux';
import ProfileView from './profile-view';

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
 
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileView);