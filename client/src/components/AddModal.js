import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';

import { addProduct,getAllProducts } from '../store/productsSlice';

function AddModal({handleCloseModal}) {
  const dispatch = useDispatch();
  const [name,setName] = useState("");
  const [author,setAuthor] = useState("");
  const [language,setLanguage] = useState("");
  const [description,setDescription] = useState("");
  const [image,setImage] = useState("");
  const [price,setPrice] = useState("");
  const [ratings,setRatings] = useState("");
  const [stock,setStock] = useState("");
  const [category,setCategory] = useState("finance");
  
  const handlePrice = (e) => {
    const number = Number(e.target.value)
    if (Number.isInteger(number) && number > 0) {
      setPrice(number);
    }
  }

  const handleRating = (e) => {
    const number = Number(e.target.value)
    if (number > 0 && number <= 5) {
      setRatings(number);
    }
  }

  const handleStock = (e) => {
    const number = Number(e.target.value)
    if (Number.isInteger(number) && number > 0) {
      setStock(number);
    }
  }

  const handleName = (e) => {
    setName(e.target.value);
  }

  const handleAuthor = (e) => {
    setAuthor(e.target.value);
  }

  const handleLanguage = (e) => {
    setLanguage(e.target.value);
  }

  const handleDescription = (e) => {
    setDescription(e.target.value);
  }

  const handleImage = (files) => {
    const file = files[0];
    setFileToBase(file);
    console.log(file);
  }

  const setFileToBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    }
  }

  const handleAdd = (e) => {
    e.preventDefault();
    const book ={name,author,language,description,stock,image,price,ratings,category}
    dispatch(addProduct(book));
    handleCloseModal(e);
  }

  return (
    <div id="container" onClick={handleCloseModal} className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center z-10">
    <div className="bg-white px-9 py-5 rounded md:w-1/3 w-3/4 box-border">
      <h2 className='text-3xl mb-5 text-center font-poppins'>Add Product</h2>
      <form action="" className='font-montserrat  text-sm'>
        <div className='mb-3'>
          <input type="text" className='border-2 rounded-xl py-1 px-3 w-full' placeholder='Name' value={name} onChange={handleName}/>
        </div>
        <div className='mb-3'>
          <input type="text" className='border-2 rounded-xl py-1 px-3  w-full' placeholder='Author' value={author} onChange={handleAuthor}/>
        </div>
        <div className='mb-3'>
          <input type="text" className='border-2 rounded-xl py-1 px-3  w-full' placeholder='Language' value={language} onChange={handleLanguage}/>
        </div>
        <div className='mb-3'>
          <input type="number" onChange={handlePrice} value = {price}className='border-2 rounded-xl py-1 px-3  w-full' placeholder='Price'/>
        </div>
        <div className='mb-3'>
          <input type="number" max="5" onChange={handleRating} value = {ratings}className='border-2 rounded-xl py-1 px-3  w-full' placeholder='Rating'/>
        </div>
        <div className='mb-3'>
          <input type="number" onChange={handleStock} value = {stock}className='border-2 rounded-xl py-1 px-3 w-full' placeholder='Stock'/>
        </div>
        <div className='mb-3 flex'>
          <label htmlFor="" className='text-gray-400 pl-2'>Image: </label>
          <input type="file" accept="image/" onChange={(e) => handleImage(e.target.files)}/>
        </div>
        <div className='mb-3'>
          <label htmlFor="" className=' text-gray-400 pl-2'>Category: </label>
          <select value={category} onChange={(e) => setCategory(e.target.value)} className='border-2 py-1 px-2 '>
            <option value="finance">Finance</option>
            <option value="self-help">Self-help</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="fantasy">Fantasy</option>
            <option value="thrillers">Thrillers</option>
            <option value="others">Others</option>
          </select>
        </div>
        <div className='mb-3'>
          <textarea name="" id="" cols="" rows="3" className='border-2 rounded-xl py-1 px-3 w-full' placeholder='Description' onChange={handleDescription} value = {description}></textarea>
        </div>
        <button id="add" className='block w-full bg-secondary text-white py-1 px-5 rounded-full hover:bg-white hover:text-secondary border-2 border-secondary transition duration-200 box-border text-l mb-5 font-poppins' onClick={handleAdd}>Add</button>
      </form>
    </div>
  </div>
  )
}

export default AddModal