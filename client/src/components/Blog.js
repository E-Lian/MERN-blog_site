import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import EditBlog from "./EditBlog";
import RemoveBlog from "./RemoveBlog";

const Blog = () => {
  const params = useParams();

  const [blogData, setBlogData] = useState("");
  useEffect(() => {
    fetch(`/blog/${params.blogId}`)
      .then((response) => response.json())
      .then((data) => {
        setBlogData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="blog-page">
      <br />
      <br />
      <Link to="/" className="link" id="back">
        &lt; Back
      </Link>
      <h1 className="blog-title">{blogData.title}</h1>
      <h2 className="blog-author">{blogData.author}</h2>
      <h4 className="blog-date">{blogData.date}</h4>
      <br />
      <br />
      <p className="blog-content">{blogData.content}</p>
      <div className="change-buttons">
        <EditBlog blogId={blogData._id} />
        <RemoveBlog blogId={blogData._id} />
      </div>
    </div>
  );
};

export default Blog;
