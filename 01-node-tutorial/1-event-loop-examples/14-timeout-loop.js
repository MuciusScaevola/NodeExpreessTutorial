console.log('first')
// setTimeout is asynchronous so it is offloaded
setTimeout(() => {
  console.log('second')
}, 0)
console.log('third')
