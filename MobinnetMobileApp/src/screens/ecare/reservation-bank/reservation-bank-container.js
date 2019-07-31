import { connect } from 'react-redux';
import ReservationBankView from './reservation-bank-view';

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
 
});

export default connect(mapStateToProps, mapDispatchToProps)(ReservationBankView);