import React, { useEffect, useState } from 'react'
import { FaAngleDoubleUp,FaRegMoon,FaSun,FaRedoAlt } from "react-icons/fa";

function FloatingButtons() {
  const [theme, setTheme] = useState(document.body.dataset.theme);
  const [dir, setdir] = useState(document.body.dir);
  useEffect(()=>{
    document.body.dataset.theme = localStorage.getItem('theme')
  },[])
  const handleTheme = () =>{
    if (document.body.dataset.theme === "mytheme") {
      document.body.dataset.theme = "dark";
      localStorage.setItem('theme','dark')
    } else {
      document.body.dataset.theme = "mytheme";
      localStorage.setItem('theme','mytheme')
    }
    setTheme(document.body.dataset.theme);
  }
  return (
    <div className='fixed bottom-6 left-6 flex flex-col gap-2'>
        <button onClick={()=>handleTheme()} className='btn btn-primary btn-xs md:btn-sm  text-white'>
          {theme === "mytheme" ?<FaRegMoon /> :<FaSun /> } 
        </button>
        <button onClick={()=>window.scrollTo(0, 0)} className='btn btn-primary btn-xs md:btn-sm text-white'><FaAngleDoubleUp /></button>
        <button onClick={()=>{
           if(document.body.dir === "rtl") {
            document.body.dir = "ltr"
            setdir('ltr')
          }else {
            document.body.dir = "rtl"
            setdir('rtl')
          }
        }} className='btn btn-primary btn-xs md:btn-sm  text-white'><FaRedoAlt className='mr-2'/> {dir === "rtl"?'AR':'EN'} </button>
    </div>
  )
}

export default FloatingButtons