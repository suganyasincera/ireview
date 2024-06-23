import {configureStore} from '@reduxjs/toolkit';

import FormReducer from './FormSlice';


  const store = configureStore({
  reducer: {
    form:FormReducer,

  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })

})
export default store;



