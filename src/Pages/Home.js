import { useState,useEffect } from "react";
import Loader from "../Components/Loader"
import Item from "../Components/Item"
function Home(){
    let url="https://fakestoreapi.com/products";
    let[products,setproducts]=useState([]);
    let[loader,setloader]=useState(false);
    async function getdata(){
        setloader(true);
     try{
   
        let data= await fetch(url);
        console.log(data);
        let output=await data.json();
        setproducts(output);
     }catch{
        return(
            <div>
                <h1>No products currently availaible</h1>
            </div>
        )
     }
  
     setloader(false);
    }
    useEffect(()=>{
        getdata();
    },[])

    return (
        <div className=" w-[100vw]  grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 lg:p-20 pt-20 gap-5 bg-slate-200">
            {
                loader===true?<Loader></Loader>:products.length===0?<h1>No products found right now</h1>:
                products.map((item)=>{
                    return <Item key={item.id} item={item}></Item>
                })
            }
        </div>
    )
}
export default Home;