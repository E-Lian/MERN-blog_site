import { useParams } from "react-router-dom";
import React, {useEffect, useState} from 'react';

const Blog = () => {
    const params = useParams();

    const [blogData, setBlogData] = useState('');
    useEffect(() => {
      fetch(`/blog/${params.blogId}`).then(
        response => response.json()
      ).then(
        data => {
          setBlogData(data)
        }
      ).catch(err => console.log(err))
    }, []);

    return (
        <div className="blog-page">
            <h1 className="blog-title">{blogData.title}</h1>
            <h2 className="blog-author">{blogData.author}</h2><br/><br/>
            <p className="blog-content">{blogData.content}</p>
        </div>
    )
}

export default Blog;