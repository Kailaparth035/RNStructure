import {
  USER_LIST_REQUEST,
  USER_LIST_RESPONSE,
} from '../../../Theme/Constant/ReduxTypes';
const initialState = {
  data: null,
};

export const UserListReducer = (state = initialState, action: any) => {
  const prevState = {...state};
  const {type} = action;
  switch (type) {
    case USER_LIST_REQUEST:
      return {
        ...prevState,
        action: action,
      };
    case USER_LIST_RESPONSE:
      return {
        ...prevState,
        data: action.payload,
      };
  }
  return prevState;
};
