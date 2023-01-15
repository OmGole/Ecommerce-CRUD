import { configureStore } from '@reduxjs/toolkit'
import productsReducer from '../store/productsSlice'
import cartReducer from '../store/cartSlice'
import userReducer from './userSlice'
import orderReducer from "./orderSlice"

export const store = configureStore({
  reducer: {
    products:productsReducer,
    cart:cartReducer,
    user:userReducer,
    order:orderReducer
  },
})