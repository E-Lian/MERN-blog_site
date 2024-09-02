import {Link} from "react-router-dom";

const EditBlog = ({blogId}) => {

    // const handleEdit = () => {
    //     fetch(`/blog/${blogId}`, {
    //         method: 'PUT'
    //       }).then((res) => {
    //         if (res.status == 404) {
    //             alert("Something's wrong. Can't edit this blog.")
    //         } else {
    //             window.location.href = `/blog/${blogId}`
    //             alert("This blog has been edited successfully.")
    //         }
    //       }).catch(err => console.log(err));
    // }

    const handleEdit = () => {
        window.location.href = `/blog/edit/${blogId}`
    }

    return (
        <h3 className="edit-blog" onClick={handleEdit}>Edit</h3>

    )
}

export default EditBlog;