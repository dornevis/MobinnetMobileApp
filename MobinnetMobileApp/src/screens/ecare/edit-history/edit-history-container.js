import { connect } from 'react-redux';
import EditHistoryView from './edit-history-view';

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(EditHistoryView);