import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsBookHalf } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { FiLogOut } from "react-icons/fi";
import { logout } from "../store/userSlice";
import { useLocation } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    navigate("/");
  };

  useEffect(() => {
    console.log(location)
  })

  const hasNumber = /\d/;  

  const navTextColor = location.pathname.slice(1) === "cart" || hasNumber.test(location.pathname) ? "black" : "white";


  return (
    <nav className={`flex justify-between p-3 font-poppins content-center items-center w-full mx-auto text-${navTextColor}`}>
      <div>
        <Link className="flex justify-end text-4xl" to="/home">
          <BsBookHalf className="md:mr-6 md:ml-0 ml-5 mt-1 text-primary" />

          <h2 className="hidden md:block">
            Happy<span className="text-primary">Reader</span>{" "}
          </h2>
        </Link>
      </div>
      <ul className="flex text-2xl justify-between content-center items-center">
        <li>
          <Link to="/cart" className="block p-4">
            <AiOutlineShoppingCart className="text-3xl" />
          </Link>
        </li>
        <li>
          <button onClick={handleLogout} className="block p-4">
            <FiLogOut className="text-3xl" />
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
