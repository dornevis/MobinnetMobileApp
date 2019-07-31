import { connect } from 'react-redux';
import GiftView from './gift-view';

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(GiftView);