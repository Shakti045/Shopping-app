import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../Cartslice";

function Showitem({item}){
    let  Mycart=useSelector((state)=>state.Cart);
let d=useDispatch();
function check(id){
  for(let a=0;a<Mycart.length;a++){
    if(Mycart[a].id===id){
        return true;
    }
  }
   return false;
}
function addtocart(item){
    d(add(item))
    toast.success("ITEM ADDED TO CART")
}
function removefromcart(id){
    d(remove(id));
    toast.error("REMOVED FROM CART")
}
    return (
        <div className=" flex flex-col items-center gap-3">

     <img src={item.image} className=" h-[200px] w-[300px] "></img>
          <div className="lg:flex gap-5 items-center">
          <h2 className=" text-xl text-green-500">₹{item.price}</h2>
          {
          check(item.id)?<button  onClick={()=>removefromcart(item.id)} className="  p-3 bg-black text-white">Remove Item</button>:<button onClick={()=>addtocart(item)} className="  p-3 bg-black text-white">Add Item</button>
          }
          </div>
        </div>
    )
}
export default Showitem;