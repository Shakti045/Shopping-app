import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Cartitem from "../Components/Cartitem";
function Cart(){
let Mycart=useSelector((state)=>state.Cart);
let [totalprice,settotalprice]=useState(0);
useEffect(()=>{
    if(Mycart.length>0){
        let tprice= Mycart.reduce((a,b)=>{
            return a+ b.price;
        },0)
        settotalprice(tprice);
    }
   
},[Mycart])
    return (
        <div className=" flex flex-col  items-center justify-center min-h-[90vh]">
        {
            Mycart.length===0?(<div className=" flex flex-col items-center gap-5">
                <h1 className="text-lg font-bold">Your Cart Is Empty!</h1>
                <NavLink to="/"><button className=" duration-150 p-3 rounded-md hover:bg-transparent hover:border-2 hover:border-green-700 hover:text-black text-white px-10  bg-green-700">Shop Now</button></NavLink>
            </div>):(<div>
                <div className=" lg:flex  justify-around w-[100vw] mt-[20vh]">
                    <div>
               {
                Mycart.map((item)=>{
                   return (<Cartitem key={item.id} item={item}></Cartitem>)
                })
               }
                </div>
                <div>
                    <h1 className="text-lg font-bold text-green-400">YOUR CART</h1>
                    <h1 className="text-[45px] text-green-900">SUMMARY</h1>
                    <h2 className=" text-lg font-bold">Total items:{Mycart.length}</h2>
                 <div  className="lg:absolute bottom-2">
                    <h2 className=" text-xl font-bold">Total Amout:{totalprice}</h2>
                   <NavLink to="https://paytm.me/D8DJ-ua"><button className="w-full bg-green-800 px-20 text-xl font-bold text-white rounded-md py-3">CHECKOUT HERE</button></NavLink>
                 </div>
                </div>
                <div>

                </div>
                </div>
            </div>)
         
        }
        </div>
    )
}

export default Cart;