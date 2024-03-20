// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const store = configureStore({
  reducer: rootReducer,
  // Optionally, you can configure middleware, enhancers, etc.
});

export default store;
