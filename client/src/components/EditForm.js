import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditForm = () => {

  // const handleSubmit = (evt) => {
  //     evt.preventDefault();
  //     const blog = {title, author, content};

  //     fetch('/create', {
  //         method: 'POST',
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify(blog)
  //       }).then(() => {
  //         window.location.href = '/'
  //       }).catch(err => console.log(err));
  // };
    const params = useParams()

  const [ogBlogData, setOgBlogData] = useState("");
  useEffect(() => {
    fetch(`/blog/${params.blogId}`)
      .then((response) => response.json())
      .then((data) => {
        setOgBlogData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = () => {
    console.log("Blog edited")
  }

  return (
    <div className="edit-form create-blog">
      <h1>Edit Blog</h1>
      <form onSubmit={handleSubmit}>
        <button>Submit edit</button>
      </form>
    </div>
  );
};

export default EditForm;
