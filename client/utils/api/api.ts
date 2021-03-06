import { checkAuth } from "client/api/user";
import history from "client/components/CustomBrowserRouter/history";
import { ROUTES } from "client/routes";
import localStorage from "webpack/mock/localStorage.mock";

import { HTTP_METHODS, NormalResponse } from "./types";

const credentials: RequestCredentials = "include";

const getAccessToken = () => localStorage.getItem("accessToken");

const getAuthorizationHeader = () => {
  if (getAccessToken()) {
    return `Bearear ${getAccessToken()}`;
  }

  return "";
};

const getJsonHeaders = () => ({
  "Content-Type": "application/json",
});

const getAuthHeaders = () => {
  return {
    Authorization: getAuthorizationHeader(),
  };
};
async function httpBase<ResponseData>(
  path: string,
  options: Options
): Promise<NormalResponse<ResponseData>> {
  try {
    const request = new Request(path, options);
    const response = await fetch(request);
    const data = await response.json();

    return {
      status: response.status,
      data,
    };
  } catch (e: any) {
    // @ts-ignore
    if (__DEV__) {
      // eslint-disable-next-line no-console
      console.error(e);
    }

    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject({
      status: 500,
      data: e,
    });
  }
}

// типа interceptors из axios :p
// уже много где используется http() поэтому лень перепиливать тут все из-за этого
export const refreshTokenWhenUnauthorized = async <ResponseData>(
  data: NormalResponse<ResponseData>,
  path: string,
  options: Options
) => {
  if (data.status === 401) {
    const tryingToRefresh = await checkAuth();

    if (tryingToRefresh.status === 200 && tryingToRefresh.data?.accessToken) {
      // set new token
      localStorage.setItem("accessToken", tryingToRefresh.data.accessToken);

      const newOptions = {
        ...options,
        headers: {
          ...options.headers,
          Authorization: getAuthorizationHeader(),
        },
        refreshTokenOnFail: false,
      };

      // original request
      return httpBase<ResponseData>(path, newOptions);
    }
    // redirect
    history.push(ROUTES.SIGN_IN.INDEX);
  }
  return data;
};

export async function http<ResponseData>(
  path: string,
  options: Options
): Promise<NormalResponse<ResponseData>> {
  const response = httpBase<ResponseData>(path, options);

  let data = await response;

  if (options.refreshTokenOnFail === undefined || options.refreshTokenOnFail) {
    data = await refreshTokenWhenUnauthorized(data, path, options);
  }

  return data;
}

type Options = RequestInit & {
  refreshTokenOnFail?: boolean;
};

export const get = <ResponseData>(
  path: string,
  options?: Options
): Promise<NormalResponse<ResponseData>> => {
  const params = {
    ...options,
    credentials,
    method: HTTP_METHODS.GET,
    headers: { ...getAuthHeaders(), ...getJsonHeaders() },
  };

  return http<ResponseData>(path, params);
};

export const post = <ResponseData>(
  path: string,
  data?: Record<string, any>,
  options?: Options
): Promise<NormalResponse<ResponseData>> => {
  const params = {
    ...options,
    credentials,
    body: JSON.stringify(data),
    method: HTTP_METHODS.POST,
    headers: { ...getAuthHeaders(), ...getJsonHeaders() },
  };
  return http<ResponseData>(path, params);
};

export const put = <ResponseData>(
  path: string,
  data: Record<string, any> | FormData,
  options?: Options
): Promise<NormalResponse<ResponseData>> => {
  const headers = {
    ...getAuthHeaders(),
    ...(data instanceof FormData ? {} : { ...getJsonHeaders() }),
  };

  const params = {
    ...options,
    credentials,
    body: data instanceof FormData ? data : JSON.stringify(data),
    method: HTTP_METHODS.PUT,
    headers,
  };
  return http<ResponseData>(path, params);
};
