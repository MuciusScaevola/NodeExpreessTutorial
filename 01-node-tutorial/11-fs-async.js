const { readFile, writeFile } = require('fs')
const path = require('path')

// readFile(path.join('content', 'subfolder', 'test.txt'), 'utf8', (err, result) => {
//   if (err) {
//     return
//   }
//   console.log(result)
// })

// readFile(path.join('content', 'subfolder', 'test2.txt'), 'utf8', (err, result) => {
//   if (err) {
//     return
//   }
//   console.log(result)
// })

console.log("start")
const dir = './content/subfolder'
readFile(path.resolve(dir, 'test.txt'), 'utf8', (err, result) => {
  if (err) {
    console.log('test.txt' + err)
    return
  }
  let first = result
  readFile(path.resolve(dir, 'test2.txt'), 'utf8', (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    let second = result
    writeFile(path.resolve(dir, 'concat.txt'), `${first}${second}`, (err, result) => {
      if (err) {
        console.log(err)
      }
      console.log("done with this task")
    })
  })
})

console.log("starting next task")
