import useLoading from "../useLoading";
import {useState} from "react";

type Options = {
    delay?: number,
    done?: () => void
}

export default function useRequest(options? : Options): [boolean, typeof makeRequest, boolean] {
    // загрузка с delay
    const [showLoading, setShowLoading] = useLoading(options?.delay);
    // загрузка без delay
    const [isLoading, setIsLoading] = useState(false);

    const makeRequest = <T>(request: () => Promise<T>): Promise<T> => {
        setShowLoading(true);
        setIsLoading(true);

        const promise = request();

        promise
            .catch((e) => {
                // @ts-ignore
                if (__DEV__) {
                    console.error(e);
                }

                alert('Error occurred! Try later');
            })
            .finally(() => {
                setShowLoading(false);
                setIsLoading(false);
                if (options?.done) options.done();
            });

        return promise;
    }

    return [showLoading, makeRequest, isLoading];
}