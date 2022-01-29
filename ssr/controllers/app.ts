import {Request, Response} from 'express';

export default function renderApp(req: Request, res: Response) {
    const responseHeaders = res.getHeaders();
    // req.tld!
    const {
        ip,
        nonce,
    } = req;

    res.renderBundle('desktop', {
        ip,
        nonce,
        responseHeaders,
    });
}
