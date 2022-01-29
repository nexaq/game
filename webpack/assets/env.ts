type AppEnv = 'development' | 'testing' | 'production';

export const env: AppEnv = (process.env.NODE_ENV as AppEnv) || 'development';

export const ENVS = {
    __DEV__: env === 'development',
    __PROD__: env === 'production',
    __TEST__: env === 'testing',
    HOST_BACKEND: JSON.stringify(process.env.HOST_BACKEND || 'localhost'),
    NODE_ENV: JSON.stringify(env),
    PORT_SSR: JSON.stringify(process.env.PORT || 3000),
    PORT_BACKEND: JSON.stringify(process.env.PORT_BACKEND || 4000),
};
export const GLOBAL_ARGS = {
    ...ENVS,
    'process.env': {
        ...ENVS,
    },
};
