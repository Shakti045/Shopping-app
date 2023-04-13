import { Routes,Route } from "react-router";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import  Navbar from "./Components/Navbar"

function App(){
  return (
    <div className=" overflow-x-hidden flex flex-col" >
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Cart" element={<Cart></Cart>}></Route>
      </Routes>

    </div>
  )
}

export default App;