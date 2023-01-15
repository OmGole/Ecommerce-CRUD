import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import OrderDashItems from './OrderDashItems';
import { getOrders } from '../store/orderSlice';

function OrderDash() {
  const orders = useSelector(state => state.order);
  const dispatch = useDispatch();
  useEffect(() => {
     dispatch(getOrders());
  },[dispatch]);

  // useEffect(() => {
  //   console.log(orders);
  // },[orders])

  return (
    <div className='md:container mx-auto relative mb-20 px-10'>
      <div>
        <h2 className='text-center text-3xl mb-9'>
          Order
        </h2>
      </div>
      <div className=''>
        <div className="md:flex hidden mb-5 text-center text-xl">
          <div className='basis-1/6'>
            <h3>Book</h3>
          </div>
          <div className='basis-2/6'>
            <h3>Shipping Address</h3>
          </div>
          <div className='basis-1/6'>
            <h3>Total</h3>
          </div>
          <div className='basis-1/6'>
            <h3>Status</h3>
          </div>
          <div className='basis-1/6'>
             <h3></h3>
          </div>
        </div>
          <hr className='border border-secondary'/>
        <div>
          {orders.length > 0 ? orders.map(order => order.products.map(product => <OrderDashItems product={product} order={order}/>)) : <p className='text-2xl py-5 text-center'>No Orders</p>}
        </div>  
          <hr className='border border-secondary'/>
      </div>
  </div>
)
}

export default OrderDash