import { connect } from 'react-redux'
import { newsSuc, listingNews } from '../actions/news'
import News from '../component/news'

const mapStateToProps  = (state) => ({
    news: state.news
});

const mapDispatchToProps = (dispatch) => ({
    newsSuc: (psuc) => dispatch(newsSuc(psuc)),
    listingNews: (psuc) => dispatch(listingNews(psuc))
});

export default connect(mapStateToProps, mapDispatchToProps)(News);
