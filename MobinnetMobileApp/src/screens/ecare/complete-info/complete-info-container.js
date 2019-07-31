import { connect } from 'react-redux';
import CompleteInfoView from './complete-info-view';

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
 
});

export default connect(mapStateToProps, mapDispatchToProps)(CompleteInfoView);