import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import './SingleBlog.css'

const SingleBlog = () => {
    const navigate = useNavigate()
    const [blog, setBlog] = useState({})

    //store the blog id from url
    const {id} = useParams()


    //function to delete blog by id
    const handleDelete = async () => {
        try {
            const res = await axios.delete("http://localhost:2000/blogs/" + id)

            if(res.status === 200) {
                navigate('/')
            }
        } catch (err) {
            alert("Something went wrong")
        }
    }



    //function to fetch the single blog by id
    const fetchSingleBlog = async () => {
        const res = await axios.get("http://localhost:2000/blogs/" + id)

        if(res.status === 200) {
            setBlog(res.data.data)
        }
        else {
            alert("Something went wrong")
        }
    }


    //mount on first visit to this page
    useEffect(() => {
        fetchSingleBlog()
    }, [])

    console.log("single blog ---", blog)

  return (
<>
    {/*  Blog Container */}
    <div className="container py-5">
    <div className="blog-card shadow-lg rounded-4 p-4 mx-auto">
        {/* Blog Title  */}
        <h1 className="blog-title mb-3">{blog.title}</h1>
        <p className="text-muted">
        By <strong>Admin</strong>{` • ${new Date(blog.createdAt).toLocaleDateString()}`}
        </p>

        {/* Blog Image  */}
        <div className="blog-image my-4">
        <img
            src="https://picsum.photos/1000/400"
            className="img-fluid rounded-3 shadow-sm"
            alt="Blog Banner"
        />
        </div>

        {/* Blog Content  */}
        <div className="blog-content">
        <h4>{blog.subTitle}</h4>
        <p>{blog.description}</p>
        </div>

        {/* Tags  */}
        <div className="blog-tags mt-4">
        <span className="badge bg-primary me-2">#CMS</span>
        <span className="badge bg-success me-2">#WebDevelopment</span>
        <span className="badge bg-warning text-dark">#FutureTech</span>
        </div>

        {/* Author Box */}
        <div className="author-box d-flex align-items-center mt-5 p-3 shadow-sm rounded-3">
        <img
            src="https://i.pravatar.cc/80"
            className="rounded-circle me-3"
            alt="Author"
        />
        <div>
            <h6 className="mb-1">John Doe</h6>
            <p className="text-muted small mb-0">
            Full-stack Developer | Tech Enthusiast | Blogger
            </p>
        </div>
        </div>
    </div>

    {/* Action Buttons */}
    <div className="action-buttons d-flex gap-3 mt-4">
        <button onClick={handleDelete} className="btn-delete">Delete</button>
        <Link to={`/update/${blog._id}`} className="btn-update">Update</Link>
    </div>
    </div>
    </>
  )
}

export default SingleBlog
