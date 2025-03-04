import React,{useContext, useState} from 'react'

import cart from './Assets/Frontend_Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
const Navbar = () => {
  const[menu,setMenu]=useState('shop');
  const{getTotalCartItems}=useContext(ShopContext);
  return (
    <div className='flex justify-around shadow-black items-center bg-gradient-to-r from-teal-600 to-blue-500'>
      <div className='flex items-center gap-10'>
        <p className='text-black-600 size-[38px] font-semibold content-center'><Link to='/' className='text-2xl font-semibold font-serif text-white'>MyAssistant</Link></p>
      </div>
      
      <div className='flex gap-4 items-center cursor-pointer'>
        {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}} className='text-2xl font-semibold font-serif text-white'>Logout</button>:
        <button className='border-2 border-black px-4 py-1 rounded-full'><Link to='/login' className='text-2xl font-semibold font-serif text-white'>Login</Link></button>}
        <Link to="/cart"><img src={cart} alt="cart"/></Link>
        <div className='px-2 border-1 bg-red-600 text-white rounded-full'>{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
