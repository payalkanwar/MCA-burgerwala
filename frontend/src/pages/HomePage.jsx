import React from 'react'
import Home from '../components/home/Home'
import Founder from '../components/home/founder'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

const HomePage = () => {
  return (
    <div>
        <Header/>
        <Home/>
        <Founder/>
        <Footer/>
    </div>
  )
}

export default HomePage