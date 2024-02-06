import {createSlice} from '@reduxjs/toolkit';
import {getUserList} from '../../controller/user_controller';

interface User {
  id: number;
  title: string;
  // Add other user properties as needed
}

interface UserState {
  users: User[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: UserState = {
  users: [],
  status: 'idle',
  error: null,
};

export const GetUserListSlice: any = createSlice({
  name: 'getUserList',
  initialState: initialState,
  reducers: {
    clearUserList: (state, action) => {
      state.status = 'idle';
      state.users = [];
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getUserList.pending, state => {
        state.status = 'loading';
      })
      .addCase(getUserList.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload;
      })
      .addCase(getUserList.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      });
  },
});
export const {clearUserList} = GetUserListSlice.actions;
export default GetUserListSlice.reducer;
