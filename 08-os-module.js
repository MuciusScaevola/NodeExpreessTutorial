const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)

// system uptime in seconds
console.log(`System uptime: ${os.uptime()} seconds`)

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freemem: os.freemem()
}

console.log(currentOs)

