import Joi from "joi";
import { IContactDto } from "../../interface/contact.interface.js";

const createdContactSchema = Joi.object<IContactDto>({
    name: Joi.string().pattern(/^(?=\S{3,})(\S{3,}\s+){1,}\S{3,}$/).required().max(100).messages({
        'string.pattern.base': 'Campo nome deve conter duas palavras,cada uma com pelo menos 3 letras.'}),
    
    phone: Joi.string().trim().pattern(/[0-9]{11}$/).required().messages({
        'string.pattern.base': 'Campo telefone deve ser numero válido'
    }),

})

export {
    createdContactSchema
}