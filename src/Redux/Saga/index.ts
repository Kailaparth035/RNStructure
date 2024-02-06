import {take, takeEvery, takeLatest, all} from 'redux-saga/effects';
import {USER_LIST_REQUEST} from '../../Theme/Constant/ReduxTypes';
import {UserListSaga} from './UserListSaga';

export default function* root_saga() {
  yield all([takeEvery(USER_LIST_REQUEST, UserListSaga)]);
}
