const asyncHandler = require("express-async-handler");
const Blog = require("../models/blog")

// get all blogs
exports.blog_list = asyncHandler(async (req, res, next) => {
    const blogs = await Blog.find()
    res.json({"blogs": blogs})
  });

exports.make_blog = asyncHandler(async (req, res, next) => {
    const blog = new Blog ({
        title: req.body.title,
        date: req.body.date,
        author: req.body.author,
        content: req.body.content
      })
      const newBlog = await blog.save()
      res.status(201).json(newBlog)
})