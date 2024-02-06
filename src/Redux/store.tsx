import {configureStore} from '@reduxjs/toolkit';
import loadingReducer from './slices/loading_slice';
import GetUserListSlice from './slices/user_list_slice';

const store = configureStore({
  reducer: {
    loading: loadingReducer,
    userList: GetUserListSlice,
    // ... other reducers
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
