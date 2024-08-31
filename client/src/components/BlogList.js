import React, { useEffect, useState } from 'react';
import BlogPreview from './BlogPreview';

const BlogList = () => {
  const [message, setMessage] = useState('');
  useEffect(() => {
    fetch("/all").then(
      response => response.json()
    ).then(
      data => {
        setMessage(data)
      }
    ).catch(err => console.log(err))
  }, []);
  
  return (
    <div className="blog-list">
      {(typeof message.blogs === 'undefined') ? (
        <h1>Loading...</h1>
      ) : (message.blogs.map((blog, i) => {
        return (<BlogPreview blog={blog}/>)
      }))}
    </div>
  )
  }
   
  export default BlogList;