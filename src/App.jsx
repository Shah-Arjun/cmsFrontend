import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import CreateBlog from './pages/CreateBlog/CreateBlog'
import SingleBlog from './pages/SingleBlog/SingleBlog'
import UpdateBlog from './pages/UpdateBlog/UpdateBlog'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/singleBlog/:id' element={<SingleBlog />} />
        <Route path='/createBlog' element={<CreateBlog />} />
        <Route path='/update/:id' element={<UpdateBlog />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
