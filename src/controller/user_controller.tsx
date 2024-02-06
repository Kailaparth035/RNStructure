import {createAsyncThunk} from '@reduxjs/toolkit';
import {ApiConstants} from '../helper/app_api_constant';
import {getData} from '../redux/api/api_client';

export const getUserList: any = createAsyncThunk('getUserList', async () => {
  try {
    return await getData(ApiConstants.user_list);
  } catch (error) {
    throw error;
  }
});
