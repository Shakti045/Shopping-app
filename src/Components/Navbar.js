import { NavLink } from "react-router-dom";
import { FaShoppingCart} from "react-icons/fa";
import { useSelector } from "react-redux";
import "./Navbar.css"
function Navbar(){
    let Mycart=useSelector((state)=>state.Cart);
    
    return (
        <div className=" z-10 flex justify-between items-center text-xl p-2 lg:pl-20 lg:pr-20 bg-black text-white fixed top-0 left-0 right-0">
         <div>
         <NavLink to="/"><img src="../logo.png" className=" h-[50px]"></img></NavLink>
         </div>
         <div className="flex gap-3 items-center">
           <NavLink to="/"><h1>Home</h1></NavLink>
           <NavLink to="/Cart"><FaShoppingCart></FaShoppingCart></NavLink>
            <p className=" text-green-400 font-bold jump">{
                Mycart.length>0?Mycart.length:""
                }</p>
         </div>
        </div>
    )
}

export default Navbar;