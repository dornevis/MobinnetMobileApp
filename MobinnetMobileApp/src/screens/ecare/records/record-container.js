import { connect } from 'react-redux';
import RecordView from './record-view';

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
 
});

export default connect(mapStateToProps, mapDispatchToProps)(RecordView);