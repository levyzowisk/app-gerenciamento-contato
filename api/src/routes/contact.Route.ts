import express  from "express";
import ContactController from "../controller/Contact.Controller.js";

const route = express.Router();

route.get('/', ContactController.find);
route.delete('/:id', ContactController.remove);

export default route;