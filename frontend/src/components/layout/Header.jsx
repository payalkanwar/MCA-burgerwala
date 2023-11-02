import React from 'react'
import {IoFastFoodOutline} from "react-icons/io5";
import {FiShoppingCart,FiLogIn} from "react-icons/fi";
import {FaUser} from "react-icons/fa";
import {motion} from "framer-motion"
const Header = ({isAuthenticed=true}) => {
  return (
    <nav>
        <motion.div
        initial={{x:"-100%"}}
        whileInView={{x:0}}
        >
            <IoFastFoodOutline/>
        </motion.div>
        <div>
            <a href ="/" > home</a>
            <a href ="/menu" > menu</a>
            <a href ="/contact" > contact</a>
            <a href ="/about" > about</a>
            <a href ="/cart" > <FiShoppingCart/></a>
            <a href ={isAuthenticed ? "/me" : "/login"}>
            {isAuthenticed ? <FaUser/> : <FiLogIn/>}
            </a>
        </div>
    </nav>
  )
}

export default Header