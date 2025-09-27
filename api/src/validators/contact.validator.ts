import { NextFunction, Request, Response, } from "express";
import { createdContactSchema, updateContactSchema } from "./schemas/contact.schema.js";

function createdContactDto (req: Request, res: Response, next: NextFunction) {
    const { error } = createdContactSchema.validate(req.body);

    if(error) {
        next(error);
    }
    next();
}


function updateContactDto(req: Request, res: Response, next: NextFunction) {
    const {error} = updateContactSchema.validate(req.body);
    if(error) {
        next(error);
    }
    next();
}

export {
    createdContactDto,
    updateContactDto
}