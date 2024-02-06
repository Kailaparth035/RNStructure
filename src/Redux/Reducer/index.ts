import {combineReducers} from 'redux';
import {LoaderReducer} from './LoaderReducer';
import {UserListReducer} from './UserReducer';

export default combineReducers({
  userList: UserListReducer,
  loader: LoaderReducer,
});
