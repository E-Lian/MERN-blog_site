import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditForm = () => {
  const params = useParams();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  useEffect(() => {
    fetch(`/blog/${params.blogId}`)
      .then((response) => response.json())
      .then((data) => {
        setTitle(data.title);
        setAuthor(data.author);
        setContent(data.content);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const blog = { title, author, content };

    fetch(`/blog/${params.blogId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    })
      .then(() => {
        window.location.href = "/";
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="edit-form create-blog">
      <h1>Edit Blog</h1>
      <form onSubmit={handleSubmit}>
        <label for="edit-title">Title:</label>
        <input
          type="text"
          value={title}
          id="edit-title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <p>
          Author: <span class="edit-author">{author}</span>
        </p>
        <label for="edit-content">Content:</label>
        <textarea
          value={content}
          id="edit-content"
          onChange={(e) => {
            setContent(e.target.value);
          }}
        ></textarea>
        <button type="submit">Submit edit</button>
      </form>
    </div>
  );
};

export default EditForm;
