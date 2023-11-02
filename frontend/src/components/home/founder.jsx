import React from 'react'
import {motion} from "framer-motion"
import me from "../../assets/founder1.jpg"
const founder = () => {
    const options= {
        initial:{x:"-100%" , 
        opacity:0},
        whileInView:{x:"0" , 
        opacity:1}
      }

  return (
    <section className='founder'>
        <motion.div {...options}>
            <img src={me} alt="founder"  width={200} height={200}/>
             <h3>Payal Kanwar</h3>
             <p>Hey, I am Payal Kanwar, thefounder of MCA Barger Wala.<br/>
             Our aim is to create most tasty barger on planet.
             </p>

        </motion.div>
    </section>
  )
}

export default founder