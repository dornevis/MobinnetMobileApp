import { connect } from 'react-redux';
import EditServiceView from './edit-service-view';

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(EditServiceView);