import { connect } from 'react-redux';
import IPGuideView from './ip-guide-view';

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
 
});

export default connect(mapStateToProps, mapDispatchToProps)(IPGuideView);