import {put, call} from 'redux-saga/effects';
import {setItem} from '../../../Helper/StoreData';
import {AsyncKey} from '../../../Theme/Constant/AsyncKey';
import {LoaderAction} from '../../Action/LoaderAction/index';
import {UserListResponse} from '../../Action/UserAction';
import {ApiCall} from '../../Services/ApiComponent';
import ApiConstants from '../../Services/ApiConstant';
import {Method} from '../../Services/ApiMethod';

export function* UserListSaga(action: any): any {
  try {
    const response = yield call(ApiCall, ApiConstants.USER_LIST, Method.GET);
    // console.log('response ::', response);

    let responseJson = yield response.json();
    // console.log('responseJson ::', responseJson);
   

      yield put(UserListResponse(responseJson));
      setItem(AsyncKey.USER_LIST, JSON.stringify(responseJson.data));
  
    yield put(LoaderAction(false));
  } catch (err) {
    yield put(LoaderAction(false));
    console.log('err ::', err);
  }
}
