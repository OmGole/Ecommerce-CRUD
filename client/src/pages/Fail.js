import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetLogin } from '../store/userSlice';

function Fail() {
  const user = useSelector(state => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleReturn = (e) => {
    e.preventDefault();
    navigate("/cart");
  }

  useEffect(() => {
    dispatch(resetLogin());
  },[])

  useEffect(() => {
    console.log(user);
  },[user])
  return (
    <div className='h-screen'>
      <div className='md:container h-full mx-auto flex justify-center content-center items-center'>
        <div className='md:w-1/3 w-3/4 p-5 shadow-2xl py-10'>
          <h2 className='text-4xl font-poppins text-center mb-10'>Payment Failed!!</h2>
          <button className='block w-full bg-secondary text-white py-1 px-5 rounded-xl hover:bg-white hover:text-secondary border-2 border-secondary transition duration-200 box-border text-xl mb-5 font-poppins' onClick={handleReturn}>Return</button>
        </div>
      </div>
    </div>
  )
}

export default Fail