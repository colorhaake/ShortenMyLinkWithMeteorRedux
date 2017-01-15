import { createSelector } from 'reselect'
import { identity } from 'ramda'

/*
 * reselect library allow to reduce duplicated state updated
 *  The drawback of redux is every state changed will trigger
 * mapStateToProps, even if we don't use that state value.
 * For example, we only use response filed here, but if there is another
 * value called otherData be update in the state, this mapStateToProps
 * still be triggered, and then do many unnecessary computation.
 * Use reselect library cannot stop mapStateToProps be triggered.
 * But it can cache the value you need in the state (cache response
 * in this case), selector function will return cache value of you want,
 * so you don't need to do unnecesary operation again. Only when the value
 * you need be updated, then selector will do computation again.
 * https://github.com/reactjs/reselect
 */

const getLinks = (state, props) => state.links
export const createLinksSelector = () => {
  return createSelector(
    getLinks,
    identity,
  )
}

const getLinksInsertedError = (state, props) => state.linksInsertedError
export const createLinksInsertedErrorSelector = () => {
  return createSelector(
    getLinksInsertedError,
    identity
  )
}
