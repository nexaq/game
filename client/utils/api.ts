export enum HTTP_METHODS {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
}

export type NormalResponse<T> = {
    status: number,
    data?: T,
}

export type ErrorResponse = {
    status: 500,
    exceptionData: any
}

const credentials: RequestCredentials = "include";

export async function http<ResponseData>(path: string, options: RequestInit): Promise<NormalResponse<ResponseData> | ErrorResponse> {

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
            exceptionData: e
        });
    }

}

//
// export const get = <Response extends unknown>(path: string, options?: RequestInit): Promise<Response> => {
//     const params = {...options, credentials, method: HTTP_METHODS.GET};
//
//     return http<Response>(path, params);
// };

export const post = <ResponseData extends unknown>(path: string, data?: Record<string, any>, options?: RequestInit): Promise<NormalResponse<ResponseData> | ErrorResponse> => {
    const params = {
        ...options,
        credentials,
        body: JSON.stringify(data),
        method: HTTP_METHODS.POST,
        headers: {
            'Content-Type': 'application/json',
        }
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