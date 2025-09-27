import Joi from "joi";
const createdContactSchema = Joi.object({
    name: Joi.string().pattern(/^(?=(?:.*\b[A-Za-zÀ-ÿ]{3,}\b.*){2,})[A-Za-zÀ-ÿ\s]+$/).required().max(100).messages({
        'string.pattern.base': 'Campo nome deve conter duas palavras,cada uma com pelo menos 3 letras.'
    }),
    phone: Joi.string().trim().pattern(/[0-9]{11}$/).required().messages({
        'string.pattern.base': 'Campo telefone deve ser numero válido'
    }),
});
export { createdContactSchema };
//# sourceMappingURL=contact.schema.js.map