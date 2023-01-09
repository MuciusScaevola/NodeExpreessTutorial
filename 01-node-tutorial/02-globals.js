// GLOBALS - NO WINDOW !!
// __dirname    - pwd
// __filename   - filename
// require      - function to use module
// module       - info about current module
// process      - info about env where the program is running


// console.log(__dirname)
// console.log(__filename)
// console.log(process)
let counter = 0
setInterval(() => {
  console.clear()
  console.log(counter)
  counter++
}, 500)
