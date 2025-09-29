import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './createBlog.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const CreateBlog = () => {
  const navigate = useNavigate()

  //1st approach to handle submission of form data
  const [title, setTitle] = useState("")
  const [subTitle, setSubTitle] = useState("")
  const [description, setDescription] = useState("")
  

  const handleSubmit = async (e) => {
    e.preventDefault()  //avoids the refresh of page when form submitted 

    //changing the form data(array) to object  ---> because post method only accepts (url, object)
    const data = {
      title: title,
      subTitle: subTitle,
      description: description
    }

    console.log(data)
    
    const res = await axios.post('http://localhost:2000/createBlog', data)

    if(res.status === 201){
      alert(res.data.message)
      navigate('/')
    } else {
      alert('Something went wrong')
    }
  }





  return (
 <>
  <Navbar />
  <div className="form-container">
    <h2>Create Blog</h2>
    <form className="form" onSubmit={handleSubmit}>
      {/* Title */}
      <label htmlFor="title">Title</label>
      <input type="text" id="title" name="title" placeholder="Enter blog title" onChange={(e) => setTitle(e.target.value)} />

      {/* Subtitle */}
      <label htmlFor="subtitle">Subtitle</label>
      <input type="text" id="subtitle" name="subTitle" placeholder="Enter blog subtitle" onChange={(e) => setSubTitle(e.target.value)} />

      {/* Description */}
      <label htmlFor="description">Description</label>
      <textarea id="description" name="description" rows="4" placeholder="Write your blog description..." onChange={(e) => setDescription(e.target.value)} />

      {/* Submit Button */}
      <button type="submit" className="btn-submit">Publish Blog</button>
    </form>
  </div>
</>

  )
}

export default CreateBlog
