import { NextFunction, Request, Response } from "express";
declare function createdContactDto(req: Request, res: Response, next: NextFunction): void;
declare function updateContactDto(req: Request, res: Response, next: NextFunction): void;
export { createdContactDto, updateContactDto };
