import React,{useEffect, useState} from 'react'
import {useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleProduct,removeSingleProduct } from '../store/productsSlice';
import Navbar from '../components/Navbar';
import { addToCart } from '../store/cartSlice';

function Product() {
  const {id} = useParams();
  const [quantity,setQuantity] = useState(1);
  const navigate = useNavigate();
  const {current:data} = useSelector(state => state.products);
  const {book} = data;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleProduct(id));
    return () => {
      dispatch(removeSingleProduct());
    }
  },[dispatch,id]);

  const handleQuantity = (e) => {
    const number = Number(e.target.value)
    if (Number.isInteger(number) && number > 0) {
      setQuantity(number);
  }
    
  }

  const increment = () => {
    setQuantity(prev => prev+1);
  }

  const decrement = () => {
    setQuantity(prev => prev === 1 ? prev : prev-1);
  }

  const handleCart = () => {
    const productInfo = {productId:id,quantity};
    dispatch(addToCart(productInfo));
    navigate('/cart');
  }
  if(!book) {
    return <div>
      
    </div>
  }
  return (
    <div className="h-screen">
      <div className='md:container mx-auto h-full relative'>
        <Navbar/>
        <div className='md:flex justify-center content-center items-center h-full pt-9'>
          <div className='basis-1/3 md:h-3/5 h-2/5 mb-7 mt-10'>
            <img src={book.image.url} alt="" className='mx-auto h-full'/>
          </div>
          <div className='basis-2/3 text-justify md:pr-20 md:px-0 px-10 pb-7'>
            <h2 className='text-xl font-bold mb-2'>{book.name}</h2>
            <p className='text-l font-extralight text-gray-500 mb-2'><span className='font-medium'>Author :</span> {book.author}</p>
            <p className='text-l mb-2'><span className='font-semibold text-l'>
            Description :</span> {book.description}</p>
            <p className='text-l mb-2'><span className='font-semibold'>
            Language :</span> {book.language}</p>
            <p className='text-l mb-2'><span className='font-semibold'>
            Price : ₹</span>{book.price}</p>
            {/* <p className='text-xl mb-9'><span className='font-semibold'>
            Stock : </span>{book.stock}</p> */}
            <div className="flex">

            <button className='block bg-secondary text-white py-1 px-3 rounded-md hover:bg-white hover:text-secondary border-2 border-secondary transition duration-200 box-border' onClick={decrement}>-</button>
            <input type="text" value={quantity} onChange={handleQuantity} className='w-9 pl-2'/>
            <button className='block bg-secondary text-white py-1 px-3 rounded-md hover:bg-white hover:text-secondary border-2 border-secondary transition duration-200 box-border' onClick={increment}>+</button>
            <button className='block bg-secondary text-white py-1 px-5 rounded-full ml-9 hover:bg-white hover:text-secondary border-2 border-secondary transition duration-200 box-border' onClick={handleCart}>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div> 
  )
}

export default Product