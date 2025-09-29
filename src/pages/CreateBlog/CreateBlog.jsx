import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './createBlog.css'

const CreateBlog = () => {
  return (
 <>
  <Navbar />
  <div className="form-container">
    <h2>Create Blog</h2>
    <form className="form">
      {/* Title */}
      <label htmlFor="title">Title</label>
      <input type="text" id="title" name="title" placeholder="Enter blog title" />

      {/* Subtitle */}
      <label htmlFor="subtitle">Subtitle</label>
      <input type="text" id="subtitle" name="subtitle" placeholder="Enter blog subtitle" />

      {/* Description */}
      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        name="description"
        rows="4"
        placeholder="Write your blog description..."
      ></textarea>

      {/* Submit Button */}
      <button type="submit" className="btn-submit">
        Publish Blog
      </button>
    </form>
  </div>
</>

  )
}

export default CreateBlog
