import { connect } from 'react-redux';
import ExtraQoutaView from './extra-qouta-view';

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ExtraQoutaView);