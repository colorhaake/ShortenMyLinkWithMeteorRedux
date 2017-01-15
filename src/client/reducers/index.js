import { combineReducers } from 'redux-loop'
import Main from './Main'

const reducers = combineReducers(
  { Main },
  {},
  /*
   * This is break Redux design principle for combineReducers
   * The principle is, for example, if the state is:
   * {
   *   buttons: {response: 'abcde'},
   *   apis: {response: ''cdefg'},
   * }
   * reducer buttons only can access state in buttons
   * ({response 'abcde'}, for this case)
   * also, apis only can acess state in apis
   * ref: https://chentsulin.github.io/redux/docs/api/combineReducers.html
   *
   * But what I did is allow all reducers can access all state
   * It depends on what's your base.
   * If you want you base on state: actions need to modify that state
   *   MUST and ONLY in that reducer (Redux's design).
   * If one action need to modify multiple state, you need to
   *   modify in each reducer.
   *
   * If you (like me) base on actions: Define one action that modify
   *   all of state you want. That's the following code did.
   */
  (state, key) => state,
  (state, key, value) => ({...state, ...value})
)

export default reducers
