import { connect } from 'react-redux'
import { headSuc } from '../actions/header'
import Header from '../component/header'

const mapStateToProps  = (state) => ({
    header: state.header
});

const mapDispatchToProps = (dispatch) => ({
    headerSuc: (hsuc) => dispatch(headerSuc(hsuc))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
