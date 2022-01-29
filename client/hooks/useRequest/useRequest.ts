import useLoading from "../useLoading";

export default function useRequest(): [boolean, typeof makeRequest] {
    const [isLoading, setLoading] = useLoading();

    const makeRequest = <T>(request: () => Promise<T>): Promise<T> => {
        setLoading(true);

        const promise = request();

        promise.catch((e) => {
            // @ts-ignore
            if (__DEV__) {
                console.error(e);
            }

            alert('Error occurred! Try later');
        })
            .finally(() => setLoading(false));

        return promise;
    }

    return [isLoading, makeRequest];
}