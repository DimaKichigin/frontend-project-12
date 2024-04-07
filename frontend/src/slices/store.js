import { configureStore } from '@reduxjs/toolkit';
import channelsReducer from './channelsSlice.js';
import modalsReducer from './modalsSlice.js';
import { backendApi } from '../api.js';

const store = configureStore({
  reducer: {
    channelsReducer,
    modalsReducer,
    [backendApi.reducerPath]: backendApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(backendApi.middleware),
});

export default store;
