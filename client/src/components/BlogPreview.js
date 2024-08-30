import { Link } from "react-router-dom";

const BlogPreview = ({ blog }) => {
    return (
      <div class="blog-prev">
        <Link to="/not found" class="link">{blog.title}</Link>
        <p class="author">By {blog.author}</p>
      </div>
    );
  }
   
  export default BlogPreview;