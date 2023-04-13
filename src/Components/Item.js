import { useState } from "react";
import { BsInfoCircle } from "react-icons/bs";
import Showinfo from "./Showinfo";
import Showitem from "./Showitem";
function Item({item}){
let [info,setinfo] = useState(false);

    return (
        <div className=" p-4 lg:w-fit w-[90vw] mx-auto shadow-xl shadow-indigo-500/40  md:w-fit flex flex-col items-center gap-3 rounded-md bg-white hover:scale-105  duration-700">
          <h1 className="font-bold">{`${item.title.substring(0,20)}........`}</h1>
          <button onClick={()=>setinfo(!info)}><p className=" flex gap-2">{info===false?"want to Know about the Product?":"Want to Buy Product?"} <BsInfoCircle className=" text-lg"></BsInfoCircle></p></button>
            {
              info===false?<Showitem item={item}></Showitem> :<Showinfo item={item}></Showinfo>
            }
        </div>
    )
}

export default Item;