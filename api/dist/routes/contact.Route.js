import express from "express";
import ContactController from "../controller/Contact.Controller.js";
import checkBody from "../middleware/checkBody.js";
import { createdContactDto, updateContactDto } from "../validators/contact.validator.js";
const route = express.Router();
route.get('/', ContactController.find);
route.delete('/:id', ContactController.remove);
route.post('/', checkBody, createdContactDto, ContactController.create);
route.patch('/:id', checkBody, updateContactDto, ContactController.update);
export default route;
//# sourceMappingURL=contact.Route.js.map