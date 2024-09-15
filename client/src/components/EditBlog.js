import { useNavigate } from "react-router-dom"


const EditBlog = ({blogId}) => {
    const navigate = useNavigate();

    const handleEdit = () => {
        navigate(`/blog/edit/${blogId}`);
    }

    return (
        <h3 className="edit-button" onClick={handleEdit}>Edit</h3>

    )
}

export default EditBlog;