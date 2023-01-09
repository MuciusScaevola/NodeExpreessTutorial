const eventEmitter = require('events')
const { EventEmitter } = require('stream')

const customEmitter = new EventEmitter()

customEmitter.on('response', (arg) => {
  console.log(`data received from ${arg}`)
})
customEmitter.on('response', (arg) => {
  console.log(`some other logic with ${arg}`)
})

customEmitter.emit('response', 'Ale')
