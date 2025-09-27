import { createdContactSchema } from "./schemas/contact.schema.js";
function createdContactDto(req, res, next) {
    const { error } = createdContactSchema.validate(req.body);
    if (error) {
        next(error);
    }
    next();
}
export { createdContactDto };
//# sourceMappingURL=contact.validator.js.map