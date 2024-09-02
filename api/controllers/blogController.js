const asyncHandler = require("express-async-handler");
const Blog = require("../models/blog");

// get all blogs
exports.blog_list = asyncHandler(async (req, res, next) => {
  const blogs = await Blog.find();
  res.json({ blogs: blogs });
});

// get one blog
exports.find_blog = asyncHandler(async (req, res, next) => {
  const blog = await findBlog(req, res);
  res.json(blog);
});

// create a blog
exports.make_blog = asyncHandler(async (req, res, next) => {
  const blog = new Blog({
    title: req.body.title,
    date: req.body.date,
    author: req.body.author,
    content: req.body.content,
  });
  const newBlog = await blog.save();
  res.status(201).json(newBlog);
});

// remove a blog
exports.remove_blog = asyncHandler(async (req, res, next) => {
  const blog = await Blog.findByIdAndDelete(req.params.id)
  if (!blog) {
    res.status(404).send('Blog not found')
  } else {
    res.json(blog)
  }
})

// edit a blog
exports.edit_blog = asyncHandler(async (req, res, next) => {
  const blog = await Blog.findByIdAndUpdate(req.params.id, req.body)
  if (!blog) {
    res.status(404).send('Blog not found')
  } else {
    res.json(blog)
  }
})

async function findBlog(req, res) {
  let blog;
  try {
    blog = await Blog.findById(req.params.id);
    if (blog == null) {
      return res.status(404).json({ message: "Cannot find blog" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  return blog;
}
