const { readFileSync, writeFileSync } = require('fs')
const path = require('path')

const myPath = (base) => path.join('content', base)

console.log("start")

const first = readFileSync(myPath('first.txt'), 'utf8')
console.log(first)

const second = readFileSync(myPath('second.txt'), 'utf8')
console.log(second)

const test = readFileSync(path.join(myPath('subfolder'), 'test.txt'), 'utf8')
console.log(test)

const content = "some random content"
writeFileSync(path.join('content', 'subfolder', 'test2.txt'), content)
writeFileSync(path.join('content', 'third.txt'), `${first} ${second}`, { flag: 'a' })

console.log("done with this task")
console.log("starting the next one")
