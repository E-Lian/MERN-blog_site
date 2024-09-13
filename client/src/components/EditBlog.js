
const EditBlog = ({blogId}) => {
    const handleEdit = () => {
        window.location.href = `/blog/edit/${blogId}`
    }

    return (
        <h3 className="edit-button" onClick={handleEdit}>Edit</h3>

    )
}

export default EditBlog;