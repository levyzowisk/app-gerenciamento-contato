import { NextFunction, Request, Response } from "express";

async function checkBody(req: Request, res: Response, next: NextFunction) {
    if(!req.body) {
        return res.status(400).json('JSON não definido');
    }
    next()
}

export default checkBody;
