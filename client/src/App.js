import React from 'react'
import { Route,Routes } from 'react-router-dom';
import Loginpage from './pages/Loginpage';
import Registepage from './pages/Registerpage';
import BlogDetails from './pages/BlogDetails';
import UserBlogs from './pages/UserBlogs';
import CreatBlog from './pages/CreatBlog';
import Blogs from './pages/Blogs';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Blogs/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/my-blogs' element={<UserBlogs/>}/>
        <Route path='/blog-details/:id' element={<BlogDetails/>}/>
        <Route path='/create-blog' element={<CreatBlog/>}/>
        <Route path='/login' element={<Loginpage/>}/>
        <Route path='/register' element={<Registepage/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
