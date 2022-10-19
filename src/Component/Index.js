import React from 'react'
import Experience from './Pages/Experience'
import Home from './Pages/Home'
import Navbar from './Pages/Navbar'
import Services from './Pages/Services'
import Study from './Pages/Study'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../index.css'
import Blog from './Pages/Blog/Blog'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Client from './Pages/Client/Client'
import '../Component/Pages/Blog/Blog.css'
import Footer from '../Component/Pages/Footer/Footer'
import SocialMedia from './Pages/SocialMedia/SocialMedia'

const Index = () => {
  return (
    <>
      <Navbar />
      <Home />
      <SocialMedia />
      <Services />
      <Experience />
      <Study />
      <Client />
      <Blog />
      <Footer />
    </>
  )
}

export default Index
