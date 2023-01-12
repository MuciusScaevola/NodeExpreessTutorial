const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
const port = process.env.PORT || 3000
require('dotenv').config()
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

// middleware
app.use(express.static('./public'))
app.use(express.json())

// routes
app.use('/api/v1/tasks', tasks)
// app.use('/api/v1/tasks/:id', tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`Server listening on Port ${port}`))
  } catch (err) {
    console.log(err)
  }
}

start()




