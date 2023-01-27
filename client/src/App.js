import React from "react";
import Home from "./pages/Home";
import Category from "./components/Category";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Error from "./pages/Error";
import { Routes, Route } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import PrivateRoute from "./components/PrivateRoute";
import Success from "./pages/Success";
import Fail from "./pages/Fail";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/success" element={<Success />} />
        <Route path="/fail" element={<Fail />} />
        <Route path="*" element={<Error />} />
        <Route element={<PrivateRoute role="user" />}>
          <Route path="/home" element={<Home />} />
          <Route exact path="/category/:cat/:id" element={<Product />} />
          <Route exact path="/category/:cat" element={<Category />} />
          <Route path="/cart" element={<Cart />} />
        
        </Route>
        <Route element={<PrivateRoute role="admin" />}>
          <Route path="/dashboard" element={<DashBoard />} />
        </Route>
       
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
