import { NextFunction, Request, Response } from "express";
import { ContactService } from "../service/Contact.Service.js";
import { IContactDto } from "../interface/contact.interface.js";
class ContactController {
    async find(req: Request, res: Response, next: NextFunction) {
        const contacts = await ContactService.find();
        res.status(200).json(contacts);
        return
    }

    async remove(req: Request<{id: string}>, res: Response, next: NextFunction) {
        await ContactService.remove(req.params.id);
        res.status(204).json();
        return
    }

    async create(req: Request<{},{}, IContactDto>, res: Response, next: NextFunction) {
        const createdContact = await ContactService.create(req.body);
        res.status(201).json(createdContact);
        return
    }

    async update(req: Request<{id: string}, {}, IContactDto>, res: Response, next: NextFunction) {
        const updatedContact = await ContactService.update(req.params.id, req.body);
        res.status(200).json(updatedContact);
        return
    }
}

export default new ContactController;