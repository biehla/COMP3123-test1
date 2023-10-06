// Anand Biehl 
// 101007500
// Test 1 Question 1


function lowerCaseWords(arr) {
  let counter = 0
  let resultArr = new Array()

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] != 'string') {
      counter += 1
      continue
    } else {
      resultArr.push(arr[i].toLowerCase())
    }
  }

  return new Promise((resolve, reject) => {
    if (counter == arr.length) {
      reject(undefined)
    }
    resolve(resultArr)
  })
}

lowerCaseWords(['PIZZA', 10, true, 25, false, 'Wings']).then((res) => {
  console.log(res)
}).catch((err) => {
  console.log("This array is all non strings")
  console.log(err)
})

lowerCaseWords([10, true, 25, false]).then(res => {
  console.log(res)
}).catch(res => {
  console.log("This array is all non strings")
  console.log(res)
})
