import { connect } from 'react-redux'
import Content from './Content'
import { AddLinks } from '../../../actions'
import { createLinksInsertedErrorSelector } from '../../../selectors'

const mapStateToProps = (state, props) => {
  const getLinksInsertedError = createLinksInsertedErrorSelector()
  error: getLinksInsertedError(state, props)
  return {
    error: getLinksInsertedError(state, props)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (url) => {
      dispatch(AddLinks(url))
    }
  }
}

const ShortenLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Content)

export default ShortenLink
