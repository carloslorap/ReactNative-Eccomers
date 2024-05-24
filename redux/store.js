import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slice/userSlice';
import productSlice from './slice/productSlice';

const store = configureStore({
  reducer: {
    user: authSlice,
    products:productSlice
    // Add other reducers here if needed
  },
}); 

export default store; 
