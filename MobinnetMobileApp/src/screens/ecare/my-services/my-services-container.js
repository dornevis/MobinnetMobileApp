import { connect } from 'react-redux';
import MyServicesView from './my-services-view';

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(MyServicesView);