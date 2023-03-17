import React from 'react'
import LiComponent from '../Components/LiComponent'

function Main({data}) {
  return (
    <div className="bg-[#EBECF0FF] min-h-screen py-5">
        <div className="max-w-[50%] m-auto p-5 rounded-3xl bg-white">
            <h1 className="text-[25px] font-bold mb-3">Оплата услуг</h1>
            <ul>
		    	{
					data.map(item=> <LiComponent key={item.id} arr={item}/>)
				}
		    </ul>
		</div>
    </div>
  )
}

export default Main