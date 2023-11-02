import React from 'react'
import MyOrders from '../components/MyOrder/MyOrder'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

const MyOrderPage = () => {
  return (
    <div>
        <Header/>
        <MyOrders/>
        <Footer/>
    </div>
  )
}

export default MyOrderPage