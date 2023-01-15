import React,{useEffect,useState} from 'react'
import {BiTrash} from 'react-icons/bi';
import {deleteCart} from '../store/cartSlice';
import {useDispatch} from 'react-redux'
import api from "../api/products"

function CartItems({book}) {
  const [cartItem,setCartItem] = useState();
  const dispatch = useDispatch();
  const {productId,quantity,price} = book;

  const getCartItem = async () => {
    const response = await api.get(`/api/v1/books/${productId}`);
    setCartItem(response.data.book);
  }

  useEffect(() => {
    getCartItem();
  },[productId])

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteCart(productId))
  }
  if(!cartItem) {
    return (<div>
      Not Loading
    </div>)
  } 
    return (
      <div className='md:flex text-center py-9 content-center items-center'>
      <div className='flex basis-1/5 mb-4'>
        <img src={cartItem.image.url} alt="" className='md:w-1/3 w-2/3 block md:mr-5 md:ml-0 mx-auto'/>
        <h2 className='self-center text-l font-semibold md:block hidden'>{cartItem.name}</h2>
      </div>
      <div className='basis-1/5 mb-3'>
        <h2 className='text-l md:text-center text-start'>
        <span className='font-bold md:hidden inline'>Price: </span>
        ₹{price}
        </h2>
      </div>
      <div className='basis-1/5 mb-3'>
        <h2 className='text-l md:text-center text-start'>
        <span className='font-bold md:hidden inline'>Quantity: </span>
          {quantity}
        </h2>
      </div>
      <div className='basis-1/5 mb-3'>
        <h2 className='text-l md:text-center text-start'>
        <span className='font-bold md:hidden inline'>Total: </span>
        ₹{quantity*price}
        </h2>
      </div>
      <div className='basis-1/5 mb-3'>
        <button onClick={handleDelete}>

        <BiTrash className='block mx-auto bg-red-500 text-white p-3 text-5xl rounded-xl hover:bg-red-600 hover:cursor-pointer'/>
        </button>
      </div>
    </div>
  )

}

export default CartItems