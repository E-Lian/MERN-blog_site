import { Link } from "react-router-dom";

const BlogPreview = ({ blog }) => {
  return (
    <div className="blog-prev">
      <Link to={`/blog/${blog._id}`}>
        <h1 className="title">{blog.title}</h1>
        <p className="author">By {blog.author}</p>
      </Link>
    </div>
  );
};

export default BlogPreview;
