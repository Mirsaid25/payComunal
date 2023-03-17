import axios from "axios";
import React, { lazy, Suspense, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import LiComponent from "./Components/LiComponent";

import { MagnifyingGlass } from  'react-loader-spinner'
// import ItemPage from "./Page/ItemPage";
// import Main from "./Page/Main";



const Main = lazy(()=> import("./Page/Main"))
const ItemPage = lazy(()=> import("./Page/ItemPage"))

function App() {
	const [arr, setArr] = useState([])

    useEffect(() => {
	    axios.get('https://jsonplaceholder.typicode.com/posts')
	        .then(res => {
				if(res.status === 200 || res.status === 201){
					setArr(res.data)
				} 
			})
			.catch(eror => alert(eror))
	}, [])

  return (
	<Suspense fallback={
	    <MagnifyingGlass
	    	visible={true}
	    	height="80"
	    	width="80"
	    	ariaLabel="MagnifyingGlass-loading"
	    	wrapperStyle={{margin: '200px auto',}}
	    	wrapperClass="MagnifyingGlass-wrapper"
	    	glassColor = '#c0efff'
	    	color = '#e15b64'
	      />
	  }>
        <Routes>
			<Route path="/" element={<Main data={arr}/>} />
			<Route path=":id" element={<ItemPage data={arr}/>}/>
		</Routes>
	</Suspense>
  );
}

export default App;
