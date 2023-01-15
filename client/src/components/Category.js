import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import {
  Link, useParams
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProducts,removeProducts } from '../store/productsSlice';

function Category() {
  const {cat:category} = useParams();
  const {books} = useSelector(state => state.products.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts(category));
    window.scrollTo(0,0);
  return () => {
    dispatch(removeProducts());
  }
  },[dispatch,category]);
  
  return (
    <>
    <div className={`h-screen bg-cover bg-no-repeat bg-center bg-${category} shadow-overlay`}>
      <div className='md:container mx-auto h-full'>
        <Navbar />
        <div className='flex justify-center content-center items-center h-full'>
          <div className='text-center'>
            <h2 className='font-poppins text-4xl mb-7 text-white'>{category.toUpperCase()}</h2>
          </div>
        </div>
      </div>         
    </div>
    <div className='md:container mx-auto px-7 my-10'>
      <h1 className='font-poppins text-3xl text-center mb-20'>Products</h1>
      <div className='grid md:grid-cols-3 grid-cols-1 gap-8'>
      {books?.map((book) => {
        return <div key={book._id} className='shadow-2xl rounded-2xl'>
        <Link className="block" to={`/category/${category}/${book._id}`}>
          <img src={book.image.url} alt="" className='rounded-t-2xl mx-auto block md:w-2/3'/>
          <div className='p-7'>
          <h2 className='text-2xl font-poppins'>{book.name}</h2>
          <p className='text-l text-gray-400'>{book.author}</p>
          <p className='text-l mt-2'>{book.price}</p>
          </div>
        </Link>
      </div>
      })}

      </div>
    </div>
  </>
  )
}

export default Category