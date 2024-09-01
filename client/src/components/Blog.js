import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import RemoveBlog from "./RemoveBlog";
import NotFound from "./NotFound";

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
      <RemoveBlog blogId={blogData._id} />
    </div>
  );
};

export default Blog;
