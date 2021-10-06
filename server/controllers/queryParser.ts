import {parse} from 'qs';

// чисто по приколу
// можно и стандартный использовать
export const queryParser = (query: string) => {
    return parse(query, {
        decoder: str => {
            return decodeURIComponent(str);
        },
    });
};
