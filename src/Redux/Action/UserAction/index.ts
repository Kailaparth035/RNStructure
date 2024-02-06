import * as TYPES from '../../../Theme/Constant/ReduxTypes';

export function UserListResponse(data: any) {
  return {
    type: TYPES.USER_LIST_RESPONSE,
    payload: data,
  };
}

export function UserListRequest() {
  return {
    type: TYPES.USER_LIST_REQUEST,
  };
}
