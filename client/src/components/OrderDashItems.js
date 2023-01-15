import React, { useState,useEffect } from 'react'
import api from "../api/products";
import { FaRegEdit } from "react-icons/fa"
import EditStatus from "./EditStatus"

function OrderDashItems({order,product}) {
  const [book,setBook] = useState();
  const [showModal,setShowModal] = useState(false);
  const {shipping} = order;
  const shippingAddress = `${shipping.address.line1} ${shipping.address.line2} ${shipping.address.postal_code} ${shipping.address.city} ${shipping.address.state} ${shipping.phone}`;

  const getBook = async () => {
    const response = await api.get(`/api/v1/books/${product.productId}`);
    setBook(response.data.book);
  }
  
  useEffect(() => {
    getBook();
  },[product]);

  const handleShowModal = (e) => {
    e.preventDefault();
    console.log(order._id);
    setShowModal(true);
  }

  const handleCloseModal = (e) => {
    if(e.target.id === "edit") setShowModal(false);
    if(e.target.id !== "container") return;
    setShowModal(false);
  }

  return (
    <div className='md:flex text-center py-9 content-center items-center'>
    <div className='flex basis-1/6 mb-4'>
      <img src={book?.image?.url} alt="" className='md:w-1/3 w-2/3 block mx-auto'/>
      {/* <h2 className='self-center text-2xl font-semibold'>{book?.name}</h2> */}
    </div>
    <div className='basis-2/6 mb-3'>
      <h2 className='text-l text-justify'>
        <span className='font-bold md:hidden inline'>Address: </span>
      {shippingAddress}
      </h2>
    </div>
    <div className='basis-1/6 mb-3'>
      <h2 className='text-l md:text-center text-start'>
    <span className='font-bold md:hidden inline'>Price: </span>
      ₹{product.quantity * product.price}
      </h2>
    </div>
    <div className='basis-1/6 mb-3'>
      <h2 className={`${order.status === "Pending" ? "text-primary" : "text-green-500"} text-l md:text-center text-start`}>
    <span className='font-bold md:hidden inline text-black'>Status: </span>
      {order.status}
      </h2>
    </div>
    <div className='basis-1/6'>
          <button onClick={handleShowModal}>
            <FaRegEdit className='block mx-auto bg-green-500 text-white p-3 text-4xl rounded-xl hover:bg-green-600 hover:cursor-pointer' />
          </button>   
    </div>
    {showModal && <EditStatus id={order._id} handleCloseModal={handleCloseModal}/>}
  </div>
)
}

export default OrderDashItems