require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

// TODO: mongoDb connection
mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Database connected'))

//const deadlineRouter = require('./routes/deadline')
const blogRouter = require('./routes/blog')

app.use(express.json())
app.use('/', blogRouter)
//app.use('/ddl', deadlineRouter)

app.listen(5000, () => console.log('Server started'))