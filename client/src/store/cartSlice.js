import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../api/products';

const initialState = {
  cart:{},
};
export const addToCart = createAsyncThunk(
  'cart/addProduct',
  async ({productId,quantity}) => {
    const response = await api.post(`/api/v1/cart`,{productId,quantity});
    return response.data;
  }
);
export const getCart = createAsyncThunk(
  'cart/getCartProducts',
  async () => {
    const response = await api.get(`/api/v1/cart`);
    return response.data;
  }
);

export const deleteCart = createAsyncThunk(
  'cart/deleteProduct',
  async (id) => {
    const response = await api.delete(`/api/v1/cart/${id}`);
    return response.data;
  }
);

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers:  {
    [getCart.fulfilled] : (state,{payload}) => {
      return {...state,...payload}
    },
    [addToCart.fulfilled] : (state,{payload}) => {
      return {...state,cart: payload};
    },
    [deleteCart.fulfilled] : (state,{payload}) => {
      return {...state,cart:payload};
    }
  },
});

export default cartSlice.reducer;