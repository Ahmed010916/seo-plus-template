import React, { useState } from "react";
import logo from "./../assets/images/Logo.png";
import { FaSearch, FaAlignJustify, FaTimes, FaInstagramSquare, FaYoutubeSquare, FaTwitterSquare, FaFacebookSquare } from "react-icons/fa";
function MainNav() {
  const [open, setopen] = useState("-left-full")
  return (
    <div className="bg-secondary ">
      <div className="container">
        <div className="flex items-center justify-between px-3 lg:px-0 py-2.5">
          <button onClick={()=>setopen("left-0")} className="flex justify-between lg:hidden btn btn-sm btn-primary rounded-md">
            <FaAlignJustify className="cursor-pointer text-white" />
          </button>
          <img className="w-56 cursor-pointer" src={logo} alt="logo" />
          <ul className="text-info gap-3 hidden lg:flex lg:justify-self-start lg:flex-1 ml-10">
            <li className="hover:text-blue-500 cursor-pointer">Articles</li>
            <li className="hover:text-blue-500 cursor-pointer">Creating</li>
            <li className="hover:text-blue-500 cursor-pointer">styles</li>
            <li className="hover:text-blue-500 cursor-pointer">Food</li>
            <li className="hover:text-blue-500 cursor-pointer">Travel</li>
            <li className="hover:text-blue-500 cursor-pointer">sports</li>
            <li className="hover:text-blue-500 cursor-pointer">Content</li>
            <li className="hover:text-blue-500 cursor-pointer">Mix</li>
            <li className="hover:text-blue-500 cursor-pointer">technology</li>
          </ul>
          <button className="btn btn-sm btn-primary rounded-md">
            <FaSearch className="cursor-pointer text-white" />
          </button>
        </div>
      </div>
      <div className={`bg-secondary absolute ${open} transition-all top-0 h-screen w-3/5 lg:hidden z-10 `}>
        <div className="py-4 px-2 flex justify-between gap-3">
          <input type="text" placeholder="Type here" class="input w-full h-8 focus:outline-0 bg-neutral rounded-md" />          
          <button onClick={()=>setopen("-left-full")} className="flex justify-between lg:hidden btn btn-sm btn-primary rounded-md">
            <FaTimes className="cursor-pointer text-white" />
          </button>
        </div>
        <hr className="border-accent"/>
        <ul className="flex flex-col gap-3 py-5 px-4">
            <li className="text-success hover:text-blue-500 cursor-pointer">Articles</li>
            <li className="text-success hover:text-blue-500 cursor-pointer">Creating</li>
            <li className="text-success hover:text-blue-500 cursor-pointer">styles</li>
            <li className="text-success hover:text-blue-500 cursor-pointer">Food</li>
            <li className="text-success hover:text-blue-500 cursor-pointer">Travel</li>
            <li className="text-success hover:text-blue-500 cursor-pointer">sports</li>
            <li className="text-success hover:text-blue-500 cursor-pointer">Content</li>
            <li className="text-success hover:text-blue-500 cursor-pointer">Mix</li>
            <li className="text-success hover:text-blue-500 cursor-pointer">technology</li>
          </ul>
        <hr className="border-accent"/>
        <div className="flex gap-3 py-5 px-4">
            <FaFacebookSquare   className="cursor-pointer text-[#3b5998] text-2xl "/>
            <FaTwitterSquare    className="cursor-pointer text-[#1da1f2] text-2xl "/>
            <FaYoutubeSquare    className="cursor-pointer text-[#e52d27] text-2xl "/>
            <FaInstagramSquare  className="cursor-pointer text-[#fc9644] text-2xl "/>
        </div>
      </div>
    </div>
  );
}

export default MainNav;
