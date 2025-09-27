import { NextFunction, Request, Response } from "express";
declare function checkBody(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
export default checkBody;
