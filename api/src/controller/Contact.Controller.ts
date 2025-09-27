import { NextFunction, Request, Response } from "express";
import { ContactService } from "../service/Contact.Service.js";
class ContactController {
    async find (req: Request, res: Response, next: NextFunction) {
        const contacts = await ContactService.find();
        res.status(200).json(contacts);
    }
}

export default new ContactController;