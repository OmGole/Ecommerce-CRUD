import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../api/products';
import jwtDecode from "jwt-decode";
import { toast } from 'react-toastify';


const initialState = {
  user:localStorage.getItem("token"),
  isAuthenticated:false,
  role: "",
  loading:false,
  error:""
};

export const login = createAsyncThunk(
  'user/login',
  async (userDetails,{rejectWithValue}) => {
    try {
      const response = await api.post(`/api/v1/auth/login`,userDetails);
      if(response.data.token) {
        localStorage.setItem("token",response.data.token);
        api.defaults.headers.Authorization = `Bearer ${response.data.token}`
      }
      return response.data;  
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
    
  }
);

export const register = createAsyncThunk(
  'user/register',
  async (userDetails,{rejectWithValue}) => {
    try {
      const response = await api.post(`/api/v1/auth/register`,userDetails);
      if(response.data.token) {
        localStorage.setItem("token",response.data.token);
        api.defaults.headers.Authorization = `Bearer ${response.data.token}`
      }
    return response.data;  
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
    
  }
);

export const productsSlice = createSlice({
  name: 'user',
  initialState,
  reducers: { 
    logout:()=>{
      localStorage.removeItem("token");
      return {
        user:null,
        isAuthenticated:false,
        loading:false,
        role:"",
        error:""
      }
    },
    resetLogin:() => {
      const token = localStorage.getItem("token")
      const user = jwtDecode(token);
      api.defaults.headers.Authorization = `Bearer ${token}`
      return {
      user:token,
      isAuthenticated:true,
      role: user.role,
      loading:false,
      userId:user.userId
      }
    }
  },
  extraReducers:  {
    [login.pending] : (state,{payload}) => {
      return {...state,loading:true}
    },
    [login.fulfilled] : (state,{payload}) => {
      const user = jwtDecode(payload.token);
      return {
      user:localStorage.getItem("token"),
      isAuthenticated:true,
      role: user.role,
      loading:false,
      userId:user.userId
      }
    },
    [login.rejected] : (state,{payload}) => {   
      return {...state,
        error:payload
      }
    },
    [register.pending] : (state,{payload}) => {
      return {...state,loading:true}
    },
    [register.fulfilled] : (state,{payload}) => {
      console.log("fulfilled");
      const user = jwtDecode(payload.token);
      return {
      user:localStorage.getItem("token"),
      isAuthenticated:true,
      role: user.role,
      loading:false,
      userId:user.userId
      }
    },
    [register.rejected] : (state,{payload}) => {
      toast.error(payload);
      return {...state,
        error:payload
      }
    },
  },
});

export const { logout, resetLogin } = productsSlice.actions;

export default productsSlice.reducer;
