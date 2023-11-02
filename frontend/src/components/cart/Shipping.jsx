import React from 'react'
import { Link } from 'react-router-dom'

const Shipping = () => {
  return (
  <section className='shipping'>
  <main >
      <h1>Shipping Detail </h1>
      <form >
        <div>
        <label>H. No.</label>
        <input type="text" placeholder='Enter the H.No.' />
        </div>
        <div>
        <label>City</label>
        <input type="text" placeholder='Enter the city' />
        </div>
        <div>
        <label>Country</label>
        <select>
          <option value="">Country</option>
          <option value="">india</option>
        </select>
        </div>
        <div>
        <label>State</label>
        <select>
          <option value="">State</option>
          <option value="">chhatisgarh</option>
        </select>
        </div>
        <div>
        <label>Pin Code</label>
        <input type="number" placeholder='Enter the Pincode' />
        </div>
        <div>
        <label>Phone No.</label>
        <input type="number" placeholder='Enter the Phone No.' />
        </div>
        <Link to="/cart/ConfirmOrder">

      <button type='submit'>Confirm Order</button>
        </Link>
      </form>
  </main>

  </section>

    )
}

export default Shipping