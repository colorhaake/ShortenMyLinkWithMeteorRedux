import { loop as reduxLoop, Effects } from 'redux-loop'

const loop = (model, effect) => {
  if (effect instanceof Promise) {
    return reduxLoop(model, Effects.promise(() => effect))
  }

  return reduxLoop(model, effect)
}

const {
  constant,
  promise,
  call,
  batch,
  none,
  lift,
} = Effects

export {
  loop,
  constant,
  promise,
  call,
  batch,
  none,
  lift,
}
