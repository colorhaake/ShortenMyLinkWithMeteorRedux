import { loop, Effects } from 'redux-loop'
import { handleShortenHistoryViewReady } from './Views'
import {
  handleFetchLinks, handleFetchLinksRes,
  handleAddLinks, handleAddLinksRes, handleAddLinksError
} from './Links'

const update = {
  'SHORTEN_HISTORY_VIEW_READY': handleShortenHistoryViewReady,
  'FETCH_LINKS': handleFetchLinks,
  'FETCH_LINKS_RES': handleFetchLinksRes,
  'ADD_LINKS': handleAddLinks,
  'ADD_LINKS_RES': handleAddLinksRes,
  'ADD_LINKS_ERROR': handleAddLinksError,
}

const Main = (state = [], action) => {
  const reducer = update[action.type]
  if (!!reducer) {
    return reducer(state, action)
  }

  console.warn(`Can not find reducer for action: ${action.type}`)
  return loop(
    state,
    Effects.none()
  )
}

export default Main
