import { NextFunction, Request, Response } from "express";
import { IContactDto } from "../interface/contact.interface.js";
declare class ContactController {
    find(req: Request, res: Response, next: NextFunction): Promise<void>;
    remove(req: Request<{
        id: string;
    }>, res: Response, next: NextFunction): Promise<void>;
    create(req: Request<{}, {}, IContactDto>, res: Response, next: NextFunction): Promise<void>;
    update(req: Request<{
        id: string;
    }, {}, IContactDto>, res: Response, next: NextFunction): Promise<void>;
}
declare const _default: ContactController;
export default _default;
