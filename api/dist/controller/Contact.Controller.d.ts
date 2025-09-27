import { NextFunction, Request, Response } from "express";
declare class ContactController {
    find(req: Request, res: Response, next: NextFunction): Promise<void>;
    remove(req: Request<{
        id: string;
    }>, res: Response, next: NextFunction): Promise<void>;
}
declare const _default: ContactController;
export default _default;
