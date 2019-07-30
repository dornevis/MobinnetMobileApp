import { connect } from 'react-redux';
import EcareHomeView from './ecare-home-view';

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
 
});

export default connect(mapStateToProps, mapDispatchToProps)(EcareHomeView);