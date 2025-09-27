import { createdContactSchema, updateContactSchema } from "./schemas/contact.schema.js";
function createdContactDto(req, res, next) {
    const { error } = createdContactSchema.validate(req.body);
    if (error) {
        next(error);
    }
    next();
}
function updateContactDto(req, res, next) {
    const { error } = updateContactSchema.validate(req.body);
    if (error) {
        next(error);
    }
    next();
}
export { createdContactDto, updateContactDto };
//# sourceMappingURL=contact.validator.js.map