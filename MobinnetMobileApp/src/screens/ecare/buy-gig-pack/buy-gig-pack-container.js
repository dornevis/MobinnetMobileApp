import { connect } from 'react-redux';
import BuyGigPackView from './buy-gig-pack-view';

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(BuyGigPackView);