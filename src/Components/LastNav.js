import React from 'react'
import {FaRegNewspaper} from "react-icons/fa";
export default function LastNav() {
  return (
    <>
        <div className='py-3 lg:px-4'>
            <div className="container relative px-5 py-3 bg-secondary lg:rounded-md flex gap-6 items-center  overflow-hidden">
                <p className='bg-accent py-2 px-3 w-fit rounded-md'>
                    News
                </p>
                <div className={`flex flex-col absolute gap-5 left-[110px] top-[31%] transition-all animate-news`}>
                    <p className='flex items-center gap-2'><FaRegNewspaper /> 1 Mysterious Facts About Owls</p>
                    <p className='flex items-center gap-2'><FaRegNewspaper /> 2 Mysterious Facts About Owls</p>
                    <p className='flex items-center gap-2'><FaRegNewspaper /> 3 Mysterious Facts About Owls</p>
                    <p className='flex items-center gap-2'><FaRegNewspaper /> 4 Mysterious Facts About Owls</p>
                    <p className='flex items-center gap-2'><FaRegNewspaper /> 5 Mysterious Facts About Owls</p>
                </div>
            </div>
        </div>
    </>
  )
}
