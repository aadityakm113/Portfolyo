
import { configureStore } from '@reduxjs/toolkit';

import userReducer from '../slices/data';

const store = configureStore({
    reducer:{
        data:userReducer
        
    }
});

export default store;

