import React, { useEffect, useState } from "react";
import { RxArrowLeft } from "react-icons/rx";
import { BsCashCoin } from "react-icons/bs";
import { Link, useLocation } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from "axios";




function ItemPage({ data }) {
	let [item , setItem] = useState({})

	let location = useLocation();

	useEffect(() => {
	  data.filter(items=>{
		if(items.id == location.pathname.split(":").at(-1)){
			setItem(items)
		}
	  })
	}, [])
	

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data =>{ 
		axios.post("https://test.7x.uz", {
			data: data
		})
		    .then(res =>{
					console.log(res.status);
				if(res.status ==200 || res.data === 201){
					window.location.href = ""
				}
			})
			.catch(error => {alert(error); window.location.href = "/"})
	}


  return (
    <div className="bg-[#EBECF0FF] min-h-screen p-5">
      <div className="w-[50%] m-auto">
        <div className="flex items-center gap-5 mb-8">
			<Link to="/">
                <RxArrowLeft size={35} color={"grey"}/>
			</Link>
          <h1 className="text-[30px] font-bold">{item.title}</h1>
        </div>
		<form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full bg-white rounded-2xl p-5 mb-[50px]">
                <div className="flex items-center justify-between gap-10 mb-10">
                <div className='w-14 h-14 rounded-full bg-[#3D4456FF] flex items-center justify-center text-white text-xl'>
                    {"d"}
                </div>
                <div>
                    <p className="text-2xl font-medium">{item.title}</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="px-2 py-1 bg-[#18A53CFF] rounded-xl flex items-center gap-2">
                    <BsCashCoin size={19} color="white"/>
                    <span className="text-white">0.2%</span>
                </div>
                </div>
				<label htmlFor="small" className="block mb-2 font-medium text-[grey] text-[17px]">Регион</label>
                <select {...register("Регион")} id="small" className="block w-full p-4 mb-6 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500">
                  <option  value="Ташкент">Ташкент гор. ПЭС</option>
                  <option value="Самарканд">Самарканд гор. ПЭС</option>
                  <option value="Фергана">Фергана гор. ПЭС</option>
                  <option value="Карши">Карши гор. ПЭС</option>
                  <option value="Бухара">Бухара гор. ПЭС</option>
                </select>
                <label htmlFor="default" className="block mb-2 font-medium text-[grey] text-[17px]">РЭС</label>
                <select {...register("РЭС")} id="default" className="bg-gray-50 border border-gray-300 p-4 text-gray-900 mb-6 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ">
                  <option  value="26280-Алмазарский">26280-Алмазарский ЭП</option>
                  <option value="26280-Зарафшанский">26280-Зарафшанский ЭП</option>
                  <option value="76580-Пайарыкский">76580-Пайарыкский ЭП</option>
                </select>
                <label htmlFor="large" className="block mb-2 font-medium text-[grey] text-[17px]">Услуга</label>
                <select {...register("Услуга")} id="large" className="block w-full p-4 text-lg text-gray-900 border mb-6 border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500">
                  <option  value={`За ${item.title}`}>{`За ${item.title}`}</option>
                </select>
				<div className="bg-[#F3F4F9FF] p-4 rounded-xl flex items-center justify-between mb-7">
                    <input required {...register("лицевой счёт")} type="text" placeholder="Лицевой N"  className="bg-transparent w-full text-lg font-medium outline-none"/>
				</div>
            </div>
			<button className="w-full bg-[#18A53CFF] py-5 rounded-2xl text-white text-xl focus:bg-[#AAD7BAFF] transition-all ease-linear">
				Продолжить
			</button>
		</form>
      </div>
    </div>
  );
}

export default ItemPage;
