import { ContactService } from "../service/Contact.Service.js";
class ContactController {
    async find(req, res, next) {
        const contacts = await ContactService.find();
        res.status(200).json(contacts);
    }
    async remove(req, res, next) {
        await ContactService.remove(req.params.id);
        res.status(204).json();
    }
}
export default new ContactController;
//# sourceMappingURL=Contact.Controller.js.map