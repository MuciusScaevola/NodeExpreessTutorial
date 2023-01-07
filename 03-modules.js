// CommonJS, every file is module (by default)
// Modules - Encapsulate Code (only share minimum)
const names = require('./4-names')
const sayHi = require('./5-utils')
const { john, peter } = require('./4-names')
const data = require('./6-alternative-flavor')
const person = require('./6-alternative-flavor').singlePerson
const items = require('./6-alternative-flavor').items

console.log(`Name: ${person.name}`)
console.log(`First item: ${items[0]}`)

sayHi.sayHi("Pao")
sayHi.sayHi(names.john)
sayHi.sayHi(names.peter)

sayHi.sayHi(john)
sayHi.sayHi(peter)

// When you import a module yuo invoke the code
require('./7-mind-greanade')
