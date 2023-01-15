import React,{useState,useEffect} from 'react'
import { BiTrash } from "react-icons/bi"
import { FaRegEdit } from "react-icons/fa"
import {useDispatch,useSelector} from "react-redux";
import EditModal from "./EditModal";
import { deleteProduct } from '../store/productsSlice';

function DashBoardItems({ book }) {
  const dispatch = useDispatch();
  const [visibleEdit,setVisibleEdit] = useState(false);

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteProduct(book._id));
  }

  const handleShowModal = () => {
    setVisibleEdit(true);
  }

  const handleCloseModal = (e) => {
    if(e.target.id === "edit") setVisibleEdit(false);
    if(e.target.id !== "container") return;
    setVisibleEdit(false);
  }


  return (
    
    <div className='md:flex text-center py-9 md:justify-center content-center items-center'>
      <div className='flex basis-1/4 mb-3'>
        <img src={book.image.url} alt="" className='md:w-1/4 w-2/3 block md:mr-5 md:ml-0 mx-auto' />
        <div className='self-center '>

          <h2 className='text-l font-semibold hidden md:block'>{book.name}</h2>
        </div>
      </div>
      <div className='basis-1/4 mb-3'>
        <h2 className='text-l'>
        <span className='font-bold md:hidden inline'>Price: </span>
          ₹{book.price}
        </h2>
      </div>
      <div className='basis-1/4 mb-3'>
        <h2 className='text-xl'>
          <button onClick={handleShowModal}>
            <FaRegEdit className='block mx-auto bg-green-500 text-white p-3 text-4xl rounded-xl hover:bg-green-600 hover:cursor-pointer' />
          </button>
          {visibleEdit && <EditModal id={book._id} handleCloseModal={handleCloseModal}/>}
        </h2>
      </div>
      <div className='basis-1/4 mb-3'>
        <button onClick={handleDelete}>

          <BiTrash className='block mx-auto bg-red-500 text-white p-3 text-4xl rounded-xl hover:bg-red-600 hover:cursor-pointer' />
        </button>
      </div>
    </div>
  )
}

export default DashBoardItems