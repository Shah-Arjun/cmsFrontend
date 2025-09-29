import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './createBlog.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const CreateBlog = () => {
  const navigate = useNavigate()

  //1st approach to handle submission of form data
  // const [title, setTitle] = useState("")
  // const [subTitle, setSubTitle] = useState("")
  // const [description, setDescription] = useState("")
  

  // const handleSubmit = async (e) => {
  //   e.preventDefault()  //avoids the refresh of page when form submitted 

  //   //changing the form data(array) to object  ---> because post method only accepts (url, object)
  //   const data = {
  //     title: title,
  //     subTitle: subTitle,
  //     description: description
  //   }

  //   console.log(data)
    
  //   const res = await axios.post('http://localhost:2000/createBlog', data)

  //   if(res.status === 201){
  //     alert(res.data.message)
  //     navigate('/')
  //   } else {
  //     alert('Something went wrong')
  //   }
  // }


  //2nd approach to handle form data submission
const handleSubmit = async (e) => {
  e.preventDefault()

  const formData = new FormData(e.currentTarget)   // mskes object as {key: value}
  console.log("formdata", formData)  // formData is in array

  const data = Object.fromEntries(formData)  //changed in object

  console.log("data", data)

  //sending to backend
  const res = await axios.post("http://localhost:2000/createBlog", data)

  if(res.status === 201) {
    alert(res.data.message)
    navigate('/')
  } 
  else {
    alert("Something went wrong")
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
      <input type="text" id="title" name="title" placeholder="Enter blog title" />

      {/* Subtitle */}
      <label htmlFor="subtitle">Subtitle</label>
      <input type="text" id="subtitle" name="subTitle" placeholder="Enter blog subtitle" />

      {/* Description */}
      <label htmlFor="description">Description</label>
      <textarea id="description" name="description" rows="4" placeholder="Write your blog description..." />

      {/* Submit Button */}
      <button type="submit" className="btn-submit">Publish Blog</button>
    </form>
  </div>
</>

  )
}

export default CreateBlog
