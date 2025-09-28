import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  //API logic goes here
  const fetchAllBlogs = async () => {
    const res = await axios.get("http://localhost:2000/blogs");
    setBlogs(res.data.blogs);
  };
  console.log("Blogs: ", blogs);

  //mount on first visit to page
  useEffect(() => {
    fetchAllBlogs();
  }, []);

  return (
    <div>
      <>
        <Navbar />
        {blogs.map((blog) => {
          return (
            <div key={blog._id} className="card d-inline-block mt-4 ms-4" style={{ width: "18rem" }}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
                <h5 className="card-title">{blog.subTitle}</h5>
                <p className="card-text">{blog.description}</p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          );
        })}
      </>
    </div>
  );
};

export default Home;
