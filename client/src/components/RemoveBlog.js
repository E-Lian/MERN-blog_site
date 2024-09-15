import { useNavigate } from "react-router-dom";

const RemoveBlog = ({blogId}) => {
    const navigate = useNavigate();

    const handleRemove = () => {
        fetch(`/blog/${blogId}`, {
            method: 'DELETE'
          }).then((res) => {
            if (res.status === 404) {
                alert("Something's wrong. Can't delete this blog.")
            } else {
                navigate("/");
                alert("This blog has been removed successfully.")
            }
          }).catch(err => console.log(err));
        
    }

    return (
        <h3 className="remove-blog" onClick={handleRemove}>Remove</h3>
    )
}

export default RemoveBlog;