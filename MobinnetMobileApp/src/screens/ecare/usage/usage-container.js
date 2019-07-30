import { connect } from 'react-redux';
import UsageView from './usage-view';

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
 
});

export default connect(mapStateToProps, mapDispatchToProps)(UsageView);