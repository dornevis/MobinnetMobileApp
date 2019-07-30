import { connect } from 'react-redux';
import PaymentReportView from './payment-report-view';

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
 
});

export default connect(mapStateToProps, mapDispatchToProps)(PaymentReportView);