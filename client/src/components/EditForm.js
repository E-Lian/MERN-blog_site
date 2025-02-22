import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditForm = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  useEffect(() => {
    fetch(`/blog/${blogId}`)
      .then((response) => response.json())
      .then((data) => {
        setTitle(data.title);
        setAuthor(data.author);
        setContent(data.content);
      })
      .catch((err) => console.log(err));
  }, [blogId]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const blog = { title, author, content };

    fetch(`/blog/${blogId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    })
      .then(() => {
        navigate("/"); // Redirects without a full page reload
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="edit-blog">
      <h1>Edit Blog</h1>
      <form className="edit-form">
        <label for="edit-title">Title:</label>
        <input
          type="text"
          value={title}
          id="edit-title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label>
          Author: <span class="edit-author">{author}</span>
          </label>
          <br />
        <label for="edit-content">Content:</label>
        <textarea
          value={content}
          id="edit-content"
          onChange={(e) => {
            setContent(e.target.value);
          }}
        ></textarea>
        <br />
        <button type="submit" onClick={handleSubmit}>
          Submit edit
        </button>
      </form>
    </div>
  );
};

export default EditForm;
