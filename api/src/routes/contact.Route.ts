import express  from "express";
import ContactController from "../controller/Contact.Controller.js";

const route = express.Router();

route.get('/', ContactController.find);

export default route;