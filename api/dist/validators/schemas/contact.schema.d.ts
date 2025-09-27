import Joi from "joi";
import { IContactDto } from "../../interface/contact.interface.js";
declare const createdContactSchema: Joi.ObjectSchema<IContactDto>;
export { createdContactSchema };
