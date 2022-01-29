import {OutgoingHttpHeaders} from "http";

declare global {
    /**
     * Пробрасываем данные из сервера в клиент
     * заголовки, Ip,...
     */
    type SSRData = {
        responseHeaders: OutgoingHttpHeaders,
        ip: string,
        nonce: string,
    };
}
