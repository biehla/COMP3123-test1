const resolvedPromise = () => {
  return new Promise(resolve => {setTimeout(() => {
    let success = {'message': 'Delayed success!'}
    resolve(success)
  }, 500)
})}

const rejectedPromise = () => {
  return new Promise((_, reject) => {setTimeout(() => {
    let failure = {'message': 'Delayed exception!'}
    try {
      throw new Error("ting broke")
    } catch (e) {
      reject(failure)
    }
  }, 500)
})}

resolvedPromise().then((result) => {
  console.log(result)
})
rejectedPromise().catch((result) => {
  console.log(result)
})
