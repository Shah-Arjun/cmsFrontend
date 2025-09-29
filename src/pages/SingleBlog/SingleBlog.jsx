import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './SingleBlog.css'

const SingleBlog = () => {
    const navigate = useNavigate()
    const [blog, setBlog] = useState({})

    //store the blog id from url
    const {id} = useParams()


    //function to delete blog by id
    const handleDelete = async () => {
        const res = await axios.delete("http://localhost:2000/blogs/" + id)

        if(res.status === 200) {
            navigate('/')
        }
        else {
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
//     <>
//      {/*  Blog Container */}
//   <div className="container py-5">
//     <div className="blog-card shadow-lg rounded-4 p-4 mx-auto">
//        {/* Blog Title  */}
//       <h1 className="blog-title mb-3">The Future of Content Management Systems</h1>
//       <p className="text-muted">By <strong>Admin</strong> • Sep 27, 2025</p>
      
//        {/* Blog Image  */}
//       <div className="blog-image my-4">
//         <img src="https://picsum.photos/1000/400" className="img-fluid rounded-3 shadow-sm" alt="Blog Banner" />
//       </div>

//        {/* Blog Content  */}
//       <div className="blog-content">
//         <p>
//           Content Management Systems (CMS) have revolutionized how individuals and businesses
//           create, manage, and share digital content. With the rise of cloud-based solutions
//           and AI-powered tools, the future of CMS looks more exciting than ever.
//         </p>
//         <p>
//           A modern CMS not only provides a platform for publishing articles but also enables 
//           collaboration, analytics, SEO optimization, and responsive designs out of the box.
//         </p>
//         <blockquote className="p-3 bg-light border-start border-3 border-primary rounded mt-4 mb-4">
//           "Good content isn’t about good storytelling. It’s about telling a true story well."
//         </blockquote>
//         <p>
//           As technology evolves, CMS platforms are expected to integrate advanced personalization, 
//           automation, and even AI-generated content to help creators save time and maximize impact.
//         </p>
//       </div>

//        {/* Tags  */}
//       <div className="blog-tags mt-4">
//         <span className="badge bg-primary me-2">#CMS</span>
//         <span className="badge bg-success me-2">#WebDevelopment</span>
//         <span className="badge bg-warning text-dark">#FutureTech</span>
//       </div>

//        {/* Author Box */}
//       <div className="author-box d-flex align-items-center mt-5 p-3 shadow-sm rounded-3">
//         <img src="https://i.pravatar.cc/80" className="rounded-circle me-3" alt="Author" />
//         <div>
//           <h6 className="mb-1">Arjun Sah</h6>
//           <p className="text-muted small mb-0">Full-stack Developer | Tech Enthusiast | Blogger</p>
//         </div>
//       </div>
//     </div>
//   </div>
//     </>



 <>
    {/*  Blog Container */}
    <div className="container py-5">
        <div className="blog-card shadow-lg rounded-4 p-4 mx-auto">
        {/* Blog Title  */}
        <h1 className="blog-title mb-3">{blog.title}</h1>
        <p className="text-muted">By <strong>Admin</strong>{` • ${blog.updatedAt}`}</p>
        
        {/* Blog Image  */}
        <div className="blog-image my-4">
            <img src="https://picsum.photos/1000/400" className="img-fluid rounded-3 shadow-sm" alt="Blog Banner" />
        </div>

        {/* Blog Content  */}
        <div className="blog-content"><h4>{blog.subTitle}</h4></div>
        <div className="blog-content">{blog.description}</div>

        {/* Tags  */}
        <div className="blog-tags mt-4">
            <span className="badge bg-primary me-2">#CMS</span>
            <span className="badge bg-success me-2">#WebDevelopment</span>
            <span className="badge bg-warning text-dark">#FutureTech</span>
        </div>

        {/* Author Box */}
        <div className="author-box d-flex align-items-center mt-5 p-3 shadow-sm rounded-3">
            <img src="https://i.pravatar.cc/80" className="rounded-circle me-3" alt="Author" />
            <div>
            <h6 className="mb-1">John Doe</h6>
            <p className="text-muted small mb-0">Full-stack Developer | Tech Enthusiast | Blogger</p>
            </div>
        </div>
        </div>
        <button onClick={handleDelete} className='btn btn-primary justi' >Delete</button>
    </div>
    </>
  )
}

export default SingleBlog
