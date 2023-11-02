import React from 'react'
import MenuCart from "./MenuCart"
import burger1 from "../../assets/burger1.png"
import burger2 from "../../assets/burger2.png"
import burger3 from "../../assets/burger3.png"

const Menu = () => {

    const addToCartHandler =(itemNum) =>{

    }
  return (
    <section id='menu' >

    <h1>MENU</h1>

    <div>
        <MenuCart itemNum ={1} 
        burgerScr={burger1} 
        price={200} 
        title="Cheese Burger" 
        handler={addToCartHandler} 
        delay={0.1}
        />

<MenuCart itemNum ={2} 
        burgerScr={burger2} 
        price={300} 
        title=" veg Cheese Burger" 
        handler={addToCartHandler}
        delay={0.5}
        />

<MenuCart itemNum ={3} 
        burgerScr={burger3} 
        price={400} 
        title="Cheese Burger with  frunch fries" 
        handler={addToCartHandler}
        delay={0.8}
        />
    </div>
    </section>
  )
}

export default Menu