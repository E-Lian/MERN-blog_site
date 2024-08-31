const CreateBlog = () => {
    return (
        <div className="create-blog">
            <h1>Create New Blog</h1>
            <form>
                <label for="title">Title:</label>
                <input type="text" id="title" name="title"></input><br/>
                <label for="author">Author:</label>
                <input type="text" id="author" name="author"></input><br/><br/> 
                <label for="content">Content:</label>
                <input type="text" id="content" name="content"></input><br/><br/>
            </form>
        </div>
    )
}

export default CreateBlog;