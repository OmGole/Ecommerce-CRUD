import React, {useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getCart} from '../store/cartSlice';
import Navbar from '../components/Navbar';
import {BiTrash} from 'react-icons/bi';
import CartItems from '../components/CartItems'
import api from '../api/products'
import Order from "../components/Order"

function Cart() {
  const cart = useSelector(state=>state.cart.cart);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getCart());
  },[dispatch]);

  const handleBuy = async (e) => {
    e.preventDefault();
    const response = await api.post('/api/v1/stripe/create-checkout-session',cart);
    if(response.data.url) window.location.href = response.data.url;
  }
    
    return (
      <>
      <div className='md:container mx-auto'>
        <Navbar/>
        <div className='pt-20'>
          <h2 className='text-center text-4xl mb-9'>
            Cart
          </h2>
        </div>
        <div className='px-10'>
          <div className="md:flex hidden mb-5 text-center text-xl">
            <div className='basis-1/5'>
              <h3>Book</h3>
            </div>
            <div className='basis-1/5'>
              <h3>Price</h3>
            </div>
            <div className='basis-1/5'>
              <h3>Quantity</h3>
            </div>
            <div className='basis-1/5'>
              <h3>Total</h3>
            </div>
            <div className='text-white basis-1/5'>
               <BiTrash/>
            </div>
          </div>
            <hr className='border border-secondary'/>
          <div>
            {cart._id && cart.products.length > 0 ? cart.products.map((book) => { 
                return <CartItems book={book}/>
              } 
            ): <p className='text-2xl py-5 text-center'>No Products Added</p>}
             
          </div>  
            <hr className='border border-secondary'/>
            <div className='text-right'>
              {cart._id && cart.products.length > 0 && <button className='mt-5 bg-secondary text-white py-1 px-9 rounded-xl hover:bg-white hover:text-secondary border-2 border-secondary transition duration-200 box-border text-xl mb-5 font-poppins' onClick={handleBuy}>Buy</button> }
            </div>
        </div>
    </div>
    <Order />
    </>
  )

}

export default Cart