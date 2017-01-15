import { loop, none} from '../utils/ReduxLoopHelper'
import { fetchLinks, addLinks } from '../apis'
import { FetchLinksRes, AddLinksRes, AddLinksError } from '../actions'
import { findIndex, propEq, update, append } from 'ramda'

export const handleFetchLinks = (state = [], action) => {
  return loop(
    state,
    fetchLinks()
      .then(FetchLinksRes)
  )
}

export const handleFetchLinksRes = (state = [], action) => {
  return loop(
    {...state, links: action.payload},
    none()
  )
}

export const handleAddLinks = (state = [], action) => {
  return loop(
    state,
    addLinks(action.payload)
      .then(AddLinksRes)
      .catch(AddLinksError)
  )
}

const updateLinks = (state, action) => {
  const {links = []} = state
  const {payload} = action

  const index = findIndex(propEq('url', payload.url), links)
  return index >= 0
    ? update(index, payload, links)
    : append(payload, links)
}

export const handleAddLinksRes = (state = [], action) => {
  const links = updateLinks(state, action)
  return loop(
    // TODO try only handle linksInsertedError in handleAddLinksError
    {...state, linksInsertedError: '', links},
    none(),
  )
}

export const handleAddLinksError = (state = [], action) => {
  return loop(
    {...state, linksInsertedError: action.payload},
    none()
  )
}
