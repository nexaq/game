const isServer = (
    typeof window === 'undefined' ||
    // @ts-ignore
    ('fake' in window && window.fake === true)
);

export default isServer;
