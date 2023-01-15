import React,{useEffect, useState} from 'react'
import {
  Link
} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import { useNavigate } from 'react-router-dom';
import { login } from "../store/userSlice"
import { toast } from 'react-toastify';

function Login() {
  const auth = useSelector(state => state.user);
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if(auth.isAuthenticated) {
      console.log(auth);
      if(auth.role === "user") navigate('/home');
      else navigate("/dashboard");
    }
  },[auth.isAuthenticated])

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleLogin = (e) => {
    e.preventDefault();
    const userDetails = {email,password}
    dispatch(login(userDetails));
    setEmail("");
    setPassword("");
  }

  useEffect(() => {
    if(auth.error === '') return;
    toast.error(auth.error);
  },[auth.error])


  return (
    <div className='h-screen'>
      <div className='sm:container h-full mx-auto flex justify-center content-center items-center'>
        <div className='md:w-1/3 w-3/4 md:py-10 py-5 px-3 shadow-2xl'>
          <h2 className='text-3xl font-poppins text-center mb-5'>Login</h2>
        <form action="" className='font-montserrat px-3'>
        <div className='mb-4'>
          <input type="email" className='border-2 rounded-xl py-1 px-3  w-full' placeholder='Email' value={email} onChange={handleEmail}/>
        </div>
        <div className='mb-5'>
          <input type="password" className='border-2 rounded-xl py-1 px-3  w-full' placeholder='Password' value={password} onChange={handlePassword}/>
        </div>
           <button className='block w-full bg-secondary text-white px-5 rounded-xl hover:bg-white hover:text-secondary border-2 border-secondary transition duration-200 box-border text-xl mb-5 font-poppins' onClick={handleLogin}>Login</button>

        </form>
           {/* <p className='text-center text-red-600 text-xl'>{auth.error ? auth.error : ""}</p> */}
        <Link to="/register" className='md:px-0 px-5 block text-xl text-center underline hover:text-primary'>
            Don't have an account? Register here
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login;