import React from 'react'
import { HiChevronRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';

function LiComponent({arr}) {
  return (
    <Link to={"/d:" + arr.id}>
    <li className='flex items-center justify-between px-2 py-4 rounded-lg hover:bg-[#EBECF0FF] transition-all ease-in cursor-pointer'>
        <div className='flex items-center gap-5'>
            <div className='w-10 h-10 rounded-full bg-[#3D4456FF] flex items-center justify-center text-white'>{arr.title.slice(0,1)}</div>
            <p className='font-medium text-lg'>{arr.title}</p>
        </div>
        <HiChevronRight size={30}/>
    </li>
    </Link>
  )
}

export default LiComponent