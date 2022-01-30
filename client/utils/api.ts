import localStorage from "webpack/mock/localStorage.mock";
import {checkAuth} from "../api/user";
import history from "../components/CustomBrowserRouter/history";
import {ROUTES} from "../routes";

export enum HTTP_METHODS {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
}

export type NormalResponse<T> = {
    status: number,
    data?: T,
}

export type ResponseValidationData<AttributeType> = {
    success?: boolean,
    errors?: ResponseValidationErrorItem<AttributeType>[],
}

export type ResponseValidation<AttributeType> = NormalResponse<ResponseValidationData<AttributeType>>;

export type HandleValidationErrors<AttributeType> = (errors?: ResponseValidationErrorItem<AttributeType>[]) => void

const credentials: RequestCredentials = "include";


let getAccessToken = () => localStorage.getItem('accessToken');

const getAuthorizationHeader = () => {
    if (getAccessToken()) {
        return `Bearear ${getAccessToken()}`
    }

    return '';
};

const getHeaders = () => ({
    'Content-Type': 'application/json',
    'Authorization': getAuthorizationHeader(),
});

// типа interceptors из axios :p
// уже много где используется http() поэтому лень перепиливать тут все из-за этого
export const refreshTokenWhenUnauthorized = async <ResponseData extends unknown>(data: NormalResponse<ResponseData>, path: string, options:  Options) => {
    if (data.status === 401) {
        const tryingToRefresh = await checkAuth();

        if (tryingToRefresh.status === 200 && tryingToRefresh.data?.accessToken) {
            // set new token
            localStorage.setItem('accessToken', tryingToRefresh.data.accessToken);

            options = {
                ...options, headers: {...getHeaders(), Authorization: getAuthorizationHeader()},
                refreshTokenOnFail: false
            };

            // original request
            return await httpBase<ResponseData>(path, options);
        } else {
            // redirect
            history.push(ROUTES.SIGN_IN.INDEX);
        }
    }
    return data;
}

async function httpBase<ResponseData>(path: string, options:  Options): Promise<NormalResponse<ResponseData>> {
    try {
        const request = new Request(path, options);
        const response = await fetch(request);
        const data = await response.json();

        return {
            status: response.status,
            data
        }
    } catch (e: any) {
        // @ts-ignore
        if (__DEV__) {
            console.error(e);
        }

        return Promise.reject({
            status: 500,
            data: e
        });
    }
}


export async function http<ResponseData>(path: string, options: Options): Promise<NormalResponse<ResponseData>> {
    const response = httpBase<ResponseData>(path, options);

    let data = await response;

    if (options.refreshTokenOnFail === undefined || options.refreshTokenOnFail) {
        data = await refreshTokenWhenUnauthorized(data, path, options);
    }

    return data;
}

type Options = RequestInit & {
    refreshTokenOnFail?: boolean
};

export const get = <ResponseData extends unknown>(path: string, options?: Options): Promise<NormalResponse<ResponseData>> => {
    const params = {...options, credentials, headers: getHeaders(), method: HTTP_METHODS.GET};

    return http<ResponseData>(path, params);
};


export const post = <ResponseData extends unknown>(path: string, data?: Record<string, any>, options?: Options): Promise<NormalResponse<ResponseData>> => {
    const params = {
        ...options,
        credentials,
        body: JSON.stringify(data),
        method: HTTP_METHODS.POST,
        headers: getHeaders()
    };
    return http<ResponseData>(path, params);
};
//
// export const put = <Request, Response extends unknown>(path: string, data: Request, options?: RequestInit): Promise<Response> => {
//     const params = {
//         ...options,
//         credentials,
//         body: JSON.stringify(data),
//         method: HTTP_METHODS.PUT,
//     };
//
//     return http<Response>(path, params);
// };
//
// export const putFormData = <Response extends unknown>(path: string, data: FormData): Promise<Response> => {
//     const params = {
//         credentials,
//         body: data,
//         method: HTTP_METHODS.PUT,
//     };
//
//     return http<Response>(path, params);
// };