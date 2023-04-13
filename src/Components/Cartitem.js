import { MdDelete } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { remove } from '../Cartslice';
import { toast } from 'react-hot-toast';
function Cartitem({item}){
    let d=useDispatch();
    function deletehandler(id){
        toast.success("ITEM REOVED")
        d(remove(id));
    }
    return (
        <div className="lg:flex md:flex gap-20 lg:max-w-[50vw] p-9 border-b-2 border-black" >
          <div>
            <img src={item.image} alt={item.id} className=" min-h-[200px] max-w-[200px]"></img>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className='text-lg font-bold'>{item.title}</h1>
            <p className='opacity-70'>{`${item.description.substring(0,160)}.....`}</p>
           <div className='flex justify-between text-3xl'>
           <p>₹{item.price}</p>
           <button onClick={()=>deletehandler(item.id)}><MdDelete className='text-red-500'></MdDelete></button>
           </div>
          </div>
        </div>
    )
}

export default Cartitem;