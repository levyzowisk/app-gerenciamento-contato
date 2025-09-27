import { ContactService } from "../service/Contact.Service.js";
class ContactController {
    async find(req, res, next) {
        const contacts = await ContactService.find();
        res.status(200).json(contacts);
        return;
    }
    async remove(req, res, next) {
        await ContactService.remove(req.params.id);
        res.status(204).json();
        return;
    }
    async create(req, res, next) {
        const createdContact = await ContactService.create(req.body);
        res.status(201).json(createdContact);
        return;
    }
    async update(req, res, next) {
        const updatedContact = await ContactService.update(req.params.id, req.body);
        res.status(200).json(updatedContact);
        return;
    }
}
export default new ContactController;
//# sourceMappingURL=Contact.Controller.js.map