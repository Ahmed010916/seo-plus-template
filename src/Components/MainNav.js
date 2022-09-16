import React from 'react'
import logo from './../assets/images/Logo.png';
import {FaSearch,ham} from "react-icons/fa";
function MainNav() {
  return (
    <div className='bg-secondary'>
        <div className='container'>
            <div className='flex items-center justify-between px-3 md:px-0 py-2.5'>
                <button className='flex justify-between md:hidden btn btn-sm btn-primary rounded-md'><FaSearch className='cursor-pointer text-white'/></button>
                    <img className='w-56 cursor-pointer' src={logo} alt="logo" />
                    <ul className='text-info gap-3 hidden md:flex md:justify-self-start md:flex-1 ml-10'>
                        <li className='hover:text-blue-500 cursor-pointer'>Articles</li>
                        <li className='hover:text-blue-500 cursor-pointer'>Creating</li>
                        <li className='hover:text-blue-500 cursor-pointer'>styles</li>
                        <li className='hover:text-blue-500 cursor-pointer'>Food</li>
                        <li className='hover:text-blue-500 cursor-pointer'>Travel</li>
                        <li className='hover:text-blue-500 cursor-pointer'>sports</li>
                        <li className='hover:text-blue-500 cursor-pointer'>Content</li>
                        <li className='hover:text-blue-500 cursor-pointer'>Mix</li>
                        <li className='hover:text-blue-500 cursor-pointer'>technology</li>
                    </ul>
                <button className='btn btn-sm btn-primary rounded-md'><FaSearch className='cursor-pointer text-white'/></button>
            </div>
        </div>
    </div>  
  )
}

export default MainNav