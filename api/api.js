require('dotenv').config()
// TODO: keep watching the tutorial and finish the other todos

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')



mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Database connected'))

//const deadlineRouter = require('./routes/deadline')
const blogRouter = require('./routes/blog')
const userRouter = require('./routes/user')

app.use(express.json())

// TODO: clean it up
const verifyJWT = (req, res, next) => {
    const token = req.headers["x-access-token"]
    if (!token) {
        res.send("No token found")
    } else {
        jwt.verify(token, "jwtSecret", (err, decoded) => {  // TODO: replace this too
            if (err) {
                res.json({auth: false, message: "Failed to authenticate"})
            } else {
                req.userId = decoded.id
                next()
            }
        })
    }
}

app.get('/auth', verifyJWT, (req, res) => {
    res.send("authenticated")
})

app.use('/user', userRouter)
app.use('/', blogRouter)

app.listen(5000, () => console.log('Server started'))