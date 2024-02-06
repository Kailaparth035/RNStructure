import ApiConstants from '../ApiConstant';

export async function ApiCall(api?: any, method?: any, bodyData?: any) {
  try {
    if (method === 'GET') {
      return fetch(ApiConstants.BASE_URL + api, {
        method: method,
      });
    } else {
      return fetch(ApiConstants.BASE_URL + api, {
        method: method,
        body: bodyData,
      });
    }
  } catch (error) {}
}
