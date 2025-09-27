import express  from "express";
import ContactController from "../controller/Contact.Controller.js";
import checkBody from "../middleware/checkBody.js";
import { createdContactDto } from "../validators/contact.validator.js";

const route = express.Router();

route.get('/', ContactController.find);
route.delete('/:id', ContactController.remove);
route.post('/', checkBody, createdContactDto, ContactController.create);

export default route;