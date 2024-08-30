const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    author: {
        type: String,
        required: true,
        default: "y1hua"
    },
    content: {
        type: String,
        required: true,
        default: ""
    }
})

module.exports = mongoose.model('Blog', blogSchema)