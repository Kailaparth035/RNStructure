import {ApiConstants} from '../../helper/app_api_constant';

const timeoutInSeconds = 30;

export const postApi = async ({
  url,
  data,
  isJson = false,
}: {
  url: string;
  data: any;
  isJson: boolean;
}) => {
  try {
    console.log(`====> API Call: ${url}`);
    console.log(`====> API Body: ${data}`);

    const response = await fetch(ApiConstants.user_list, {
      method: 'POST',
      body: isJson ? JSON.stringify(data) : data,
    });

    return handleResponse(response);
  } catch (error) {
    throw catchReturnResponse(error);
  }
};

export const getData = async (
  uri: string,
  {
    query,
    headers,
  }: {query?: Record<string, any>; headers?: Record<string, string>} = {},
): Promise<Response> => {
  try {
    console.log(`====> API Call: ${uri}`);

    const queryString = query
      ? `?${Object.entries(query)
          .map(
            ([key, value]) =>
              `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
          )
          .join('&')}`
      : '';

    const response = await fetch(`${uri}${queryString}`, {
      method: 'GET',
      headers: headers,
    });

    return handleResponse(response) as Promise<Response>;
  } catch (e) {
    throw catchReturnResponse(e);
  }
};

const catchReturnResponse = (error: any) => {
  return error.toString();
};
const handleResponse = (response: Response) => {
  if (response) {
    if (response.status == 500) {
      throw 'Internal server error';
    } else if (response.status == 401) {
      throw 'Unauthorized error';
    } else if (response.status == 404) {
      throw 'Oops! Page Not Found!';
    } else if (response.status != 200 && response.status != 201) {
      throw response.body;
    } else {
      return response.json();
    }
  } else {
    throw 'Something went wrong!';
  }
};
