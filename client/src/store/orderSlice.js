import { createAsyncThunk, createSlice ,current} from '@reduxjs/toolkit';
import api from '../api/products';

const initialState = [];

export const getOrders = createAsyncThunk(
  'order/fetchOrders',
  async () => {
    const response = await api.get('/api/v1/order');
    return response.data;
  }
);

export const getOrdersById= createAsyncThunk(
  'order/fetchOrdersById',
  async (id) => {
    const response = await api.get(`/api/v1/order/${id}`);
    return response.data;
  }
);

export const editOrder = createAsyncThunk(
  'order/updateOrder',
  async (data) => {
    console.log(data);
    const response = await api.patch(`/api/v1/order/update/${data.id}`, data.newStatus);
    return response.data;  
  }
);

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers:  {
    [getOrders.fulfilled] : (state,{payload}) => {
      return [...payload];
    },
    [getOrdersById.fulfilled] : (state,{payload}) => {
      return [...payload];
    },
    [editOrder.fulfilled] : (state,{payload}) => {
      const newOrders = state.map(order => 
        order._id === payload._id ? payload : order);
      return newOrders;
    },

  },
});

export default orderSlice.reducer;
