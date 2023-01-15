import React, { useState} from 'react'
import { useDispatch } from 'react-redux';
import { editOrder } from '../store/orderSlice';

function EditModal({id,handleCloseModal}) {
  const dispatch = useDispatch();
  const [status,setStatus] = useState("Pending");


  const handleEdit = (e) => {
    e.preventDefault();
    const newStatus = {status}
    dispatch(editOrder({id,newStatus}));
  }

  return (
    <div id="container" onClick={handleCloseModal} className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
    <div className="bg-white p-9 rounded w-1/5 box-border">
      <h2 className='text-4xl mb-5 text-center font-poppins'>Edit Order</h2>
      <form action="" className='font-montserrat'>
        <div className='mb-5'>
          <label htmlFor="" className=' text-gray-400 pl-2'>Status: </label>
          <select value={status} onChange={(e) => setStatus(e.target.value)} className='border-2 py-2 px-2 '>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <button id="edit" className='block w-full bg-secondary text-white py-1 px-5 rounded-full hover:bg-white hover:text-secondary border-2 border-secondary transition duration-200 box-border text-xl mb-5 font-poppins' onClick={handleEdit}>Edit</button>
      </form>
    </div>
  </div>
  )
}

export default EditModal