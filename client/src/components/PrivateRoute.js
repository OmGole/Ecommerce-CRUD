import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom';


function PrivateRoute({role}) {
  const user = useSelector(state => state.user);
  console.log(user);
  if(!user.isAuthenticated) {
    return <Navigate to="/" />
  }
  if(user.isAuthenticated && user.role !== role) {
    if(user.role === "admin") {
      console.log("not an user")
      return <Navigate to="/dashboard"/>
    }
    if(user.role === "user") {
      console.log("not an admin")
      return <Navigate to="/home"/>
    }
  }
  return <Outlet/> 
}

export default PrivateRoute;