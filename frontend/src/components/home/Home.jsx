import React from 'react'
import {motion} from "framer-motion"

 const options= {
    initial:{x:"-100%" , 
    opacity:0},
    whileInView:{x:"0" , 
    opacity:1}
  }
  
const Home = () => {
 
  return (
    <>
  <section className='home'>
    <div>
    <motion.h1 {...options}>MCA Burger Wala</motion.h1>
    <motion.p {...options}  transition={{delay:0.2}}>Burger Day Every Day</motion.p>
    </div>  
    <motion.a href="/menu"
    {...options}  transition={{delay:0.3}}
    >Explore Menu</motion.a>  
    
  </section>
   
   </>
    )
}

export default Home