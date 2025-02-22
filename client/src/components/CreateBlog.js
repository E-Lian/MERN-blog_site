import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const blog = {title, author, content};

        fetch('/create', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
          }).then(() => {
            navigate("/");
          }).catch(err => console.log(err));
    };

    return (
        <div className="create-blog">
            <h1>Create New Blog</h1>
            <form className="create-form" onSubmit={handleSubmit}>
                <label for="title">Title:</label>
                <input type="text" id="title" name="title" value={title} onChange={(e) => {
                    setTitle(e.target.value);
                }}></input><br/>
                <label for="author">Author:</label>
                <input type="text" id="author" name="author" value={author} onChange={(e) => {
                    setAuthor(e.target.value);
                }}/><br/><br/> 
                <label for="content">Content:</label>
                <textarea type="text" id="content" name="content" value = {content} onChange={(e) => {
                    setContent(e.target.value)
                }}/><br/><br/>
                <button>Add this blog</button>
            </form>
        </div>
    )
}

export default CreateBlog;