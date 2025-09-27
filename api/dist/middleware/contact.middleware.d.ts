import { NextFunction, Request, Response } from 'express';
declare const handleError: (err: Error, req: Request, res: Response, next: NextFunction) => void;
export default handleError;
