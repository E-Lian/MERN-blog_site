import { Link } from "react-router-dom";

const BlogPreview = ({ blog }) => {
    return (
      <div className="blog-prev">
        <Link to={`/blog/${blog._id}`} className="link" >{blog.title}</Link>
        <p className="author">By {blog.author}</p>
      </div>
    );
  }
   
  export default BlogPreview;