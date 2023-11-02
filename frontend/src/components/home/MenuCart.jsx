import React from 'react'
import {motion} from "framer-motion"
import me from "../../assets/burger1.png"

const MenuCart = ({itemNum,burgerScr,price,title ,handler, delay=0}) => {

    const options= {
        initial:{x:"-100%" , 
        opacity:0},
        whileInView:{x:"0" , 
        opacity:1}
      }
  return (
  <motion.div className='menucart' {...options} transition={{delay}} >
    <div>Item{itemNum}</div>
    <main>

    <img src={burgerScr} alt={itemNum} />
    <h5>₹ {price}</h5>
    <p>{title}</p>

    <button onClick={()=>handler(itemNum)}>Buy Now</button>

    </main>

  </motion.div>
    )
}

export default MenuCart