import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios'

const UpdateBlog = () => {
    const navigate = useNavigate()

    const {id} = useParams()
    const [blog, setBlog] = useState({})


    //fetch the blog to populate in input fields
    const fetchSingleBlog = async() => {
        const res = await axios.get("http://localhost:2000/blogs/" + id)

        if(res.status === 200) {
            setBlog(res.data.data)
        }
        else {
            console.log("Something went wrong")
        }
    }


    //handle input change
    const handleChange = (e) => {
        setBlog({...blog, [e.target.name]: e.target.value})
    }


    //keys not to sen to backend ---- to be excluded
    // const keyToExclude = ['chratedAt', 'updatedAt']
    // keyToExclude.forEach((key) => {
    //     delete blog[key]
    // })


    //handle form submit after updating
    const handleUpdate = async (e) => {
        e.preventDefault()

        const res = await axios.patch("http://localhost:2000/blogs/" + id, blog)
        if(res.status === 200){
            navigate("/singleBlog/" + id)
        }
    }



    //mount on first visit to this page
    useEffect(() => {
        fetchSingleBlog()
    }, [])
    

  return (
 <>
  <Navbar />
  <div className="form-container">
    <h2>Update Blog</h2>
    <form className="form" onSubmit={handleUpdate}>
      {/* Title */}
      <label htmlFor="title">Title</label>
      <input type="text" id="title" name="title" value={blog.title} placeholder="Enter blog title" onChange={handleChange} />

      {/* Subtitle */}
      <label htmlFor="subtitle">Subtitle</label>
      <input type="text" id="subtitle" name="subTitle"value={blog.subTitle}  placeholder="Enter blog subtitle" onChange={handleChange} />

      {/* Description */}
      <label htmlFor="description">Description</label>
      <textarea id="description" name="description" rows="4" value={blog.description} placeholder="Write your blog description..." onChange={handleChange} />

      {/* Submit Button */}
      <button type="submit" className="btn-submit">Update</button>
    </form>
  </div>
</>

  )
}

export default UpdateBlog
