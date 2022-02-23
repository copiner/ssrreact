import { connect } from 'react-redux'
import { peachSuc } from '../actions/peach'
import Peach from '../component/peach'

const mapStateToProps  = (state) => ({
    peach: state.peach
});

const mapDispatchToProps = (dispatch) => ({
    peachSuc: (psuc) => dispatch(peachSuc(psuc))
});

export default connect(mapStateToProps, mapDispatchToProps)(Peach);
