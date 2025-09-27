import { NextFunction, Request, Response, } from "express";
import { createdContactSchema } from "./schemas/contact.schema.js";

function createdContactDto (req: Request, res: Response, next: NextFunction) {
    const { error } = createdContactSchema.validate(req.body);

    if(error) {
        next(error);
    }
    next();
}

export {
    createdContactDto
}