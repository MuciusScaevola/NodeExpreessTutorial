const { readFile, writeFile } = require('fs')
const util = require('util')

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

const writeText = (path, fst, snd) => {
  return new Promise((reject, resolve) => {
    writeFile(path, `${fst} ${snd}`, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

// getText('./content/first.txt')
//   .then(result => console.log(result))
//   .catch((err) => console.log(err))

// const start = async () => {
//   try {
//     const first = await getText('./content/first.txt')
//     const second = await getText("./content/second.txt")
//     const writeRes = await writeText('./content/fourth.txt', first, second)
//   } catch (error) {
//     console.log(error)
//   }
// }

const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const start = async () => {
  try {
    const first = await readFilePromise('./content/first.txt', 'utf8')
    const second = await readFilePromise('./content/second.txt', 'utf8')
    await writeFilePromise('./content/fifth.txt', `${first}${second}`)
  } catch (error) {
    console.log(error)
  }
}
start()
