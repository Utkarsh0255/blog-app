import React, { useState } from 'react';
import './AddBlog.css'

const AddBlog = ({ onAddBlog }) => {
  const [blogData, setBlogData] = useState({
    category: '',
    heading: '',
    description: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBlogData((prevBlogData) => ({
      ...prevBlogData,
      [name]: value,
    }));
  };

  const handleAddBlog = () => {
    if (blogData.heading && blogData.description && blogData.category) {
      onAddBlog(blogData);
      setBlogData({
        heading: '',
        description: '',
        category: ''
      });
    } else {
      alert('Please provide all fields.');
    }
  };

  return (
    <div className='main'>
      <label>Category:
        <br/>
        <input type="text" name="category" required value={blogData.category} onChange={handleInputChange}/></label>
      <br />
      <label>Title:
        <br/>
        <input type="text" name="heading" required value={blogData.heading} onChange={handleInputChange}/></label>
      <br />
      <label>
        Content:<br/>
        <textarea name="description" value={blogData.description} onChange={handleInputChange}/>
      </label>
      <br />
      <button className='addBlog addButton' onClick={handleAddBlog}>Add Blog</button>
    </div>
  );
};

export default AddBlog;
