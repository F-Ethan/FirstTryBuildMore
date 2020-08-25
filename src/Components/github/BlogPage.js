import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const BlogPage = () => {
  const [blogData, setBlogData] = useState({
    title: '',
    date: '',
    text: '',
  });

  const { title, date, text } = blogData;
  let { blogId, index } = useParams();
  // console.log(blogId)
  // console.log(useParams())

  const fetchBlogList = () => {
    var encodedURI = 'http://localhost:5000/api/posts/' + blogId;
    // console.log(encodedURI);
    return axios.get(encodedURI).then(response => {
      // console.log(response.data)
      setBlogData({
        title: response.data.title,
        date: response.data.date,
        text: response.data.text,
      });
      // console.log(blogData)
    });
  };
  useEffect(() => {
    fetchBlogList();
  }, []);

  return (
    <div className='container mb-3 shadow card mt-3 mb-3'>
      <div className='row justify-content-center'>
        <div className='card border-0 text-center col-10  p-3'>
          <h5 className='card-title m-3'>{title}</h5>
          <p className='card-text'>{date}</p>
          <p className='card-text'>{text}</p>

          <a
            href='http://localhost:3000/BlogList'
            className=' sm-btn btn-primary '
            role='button'
          >
            back to blogs
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
