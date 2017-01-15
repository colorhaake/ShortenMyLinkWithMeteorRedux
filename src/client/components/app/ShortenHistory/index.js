import { connect } from 'react-redux'
import Content from './Content'
import { ShortenHistoryViewReady } from '../../../actions'
import { createLinksSelector } from '../../../selectors'

const mapStateToProps = (state, props) => {
  const getLinks= createLinksSelector()
  return {
    links: getLinks(state, props)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    viewReady: () => dispatch(ShortenHistoryViewReady())
  }
}

const ShortenHistory = connect(
  mapStateToProps,
  mapDispatchToProps
)(Content)

export default ShortenHistory
