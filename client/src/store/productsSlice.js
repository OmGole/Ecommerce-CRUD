import { createAsyncThunk, createSlice ,current} from '@reduxjs/toolkit';
import api from '../api/products';
import { toast } from 'react-toastify';

const initialState = {
  product:{},
  current:{},
  error:''
};
export const getProducts = createAsyncThunk(
  'products/fetchProducts',
  async (category) => {
    const response = await api.get(`/api/v1/books?category=${category}`);
    return response.data;
  }
);

export const getAllProducts = createAsyncThunk(
  'products/fetchAllProducts',
  async () => {
    const response = await api.get(`/api/v1/books`);
    return response.data;
  }
);

export const deleteProduct = createAsyncThunk(
  'products/removeProduct',
  async (id) => {
    const response = await api.delete(`/api/v1/books/${id}`);
    return response.data;
  }
);

export const editProduct = createAsyncThunk(
  'products/changeProduct',
  async (data) => {
    try {
    console.log(data);
    const response = await api.patch(`/api/v1/books/${data.id}`,data.newBook);
    return response.data;  
    } catch (error) {
      console.log(error);
    }
    
  }
);

export const addProduct = createAsyncThunk(
  'products/addProduct',
  async (newProduct,{rejectWithValue}) => {
    try {
      const response = await api.post(`/api/v1/books`,newProduct,{ headers: {
        'Content-Type': 'multipart/form-data'
      } });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
    
  }
);

export const getSingleProduct = createAsyncThunk(
  'products/fetchSingleProduct',
  async (id) => {
    const response = await api.get(`/api/v1/books/${id}`);
    return response.data;
  }
);

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    removeSingleProduct : (state) => {
      state.current={}
    },
    removeProducts : (state) => {
      state.product={}
    }
  },

  extraReducers:  {
    [getProducts.fulfilled] : (state,{payload}) => {
      return {...state, product:{...payload}};
    },
    [getSingleProduct.fulfilled] : (state,{payload}) => {
      return {...state, current:payload};
    },
    [getAllProducts.fulfilled] : (state,{payload}) => {
      return {...state, product:payload};
    },
    [deleteProduct.fulfilled] : (state,{payload}) => {
      const newBooks = state.product.books.filter(book => book._id !== payload.book._id);
      return {...state,product:{books:newBooks}};
    },
    [addProduct.fulfilled] : (state,{payload}) => {
      return {...state, product:{books:[...state.product.books,payload]}};
    },
    [addProduct.rejected] : (state,{payload}) => {
      toast.error(payload);
      return {...state, error:payload};
    },
    [editProduct.fulfilled] : (state,{payload}) => {
      const newBooks = state.product.books.map(book => 
        book._id === payload.book._id ? payload.book : book);
      return {...state, product:{books:newBooks}};
    }
  },
});

export const { removeSingleProduct,removeProducts } = productsSlice.actions;

export default productsSlice.reducer;
