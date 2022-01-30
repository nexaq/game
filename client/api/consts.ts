const backendHost = process.env.HOST_BACKEND || 'localhost';
const backendPort = process.env.PORT_BACKEND || 4000;

const baseUrl = `${backendHost}:${backendPort}`;

export const ApiPath = {
    USER: {
        CREATE: `${baseUrl}/user`,
        LOGIN: `${baseUrl}/user/login`,
        REFRESH_TOKEN: `${baseUrl}/user/refresh`
    }
};

