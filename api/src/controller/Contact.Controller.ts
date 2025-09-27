import { NextFunction, Request, Response } from "express";
import { ContactService } from "../service/Contact.Service.js";
class ContactController {
    async find(req: Request, res: Response, next: NextFunction) {
        const contacts = await ContactService.find();
        res.status(200).json(contacts);
    }

    async remove(req: Request<{id: string}>, res: Response, next: NextFunction) {
        await ContactService.remove(req.params.id);
        res.status(204).json();
    }
}

export default new ContactController;