export const call = (methodName, payload) => (
  new Promise((resolve, reject) => {
    Meteor.call(methodName, payload, (error, result) => {
      if (error) {
        console.warn('meteorCall error:', error)
        reject(error)
        return
      }

      resolve(result)
    })
  })
)
