import { connect } from 'react-redux';
import InternetReportView from './internet-report-view';

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
 
});

export default connect(mapStateToProps, mapDispatchToProps)(InternetReportView);