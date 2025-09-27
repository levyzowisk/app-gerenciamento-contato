import { Prisma } from '@prisma/client';
import {NextFunction, Request, Response} from 'express';
import BaseError from '../utils/BaseError.utils.js';
import Joi from 'joi';

const handleError = (err: Error, req: Request, res: Response, next: NextFunction) => {
    
    if(err instanceof Prisma.PrismaClientKnownRequestError) {
        
        if(err.code === 'P2025') {
            res.status(404).json('Recurso não encontrado!');
            return
        }
    }

    if(err instanceof BaseError) {
        res.status(err.statusCode).json(err.message ? err.message : '');
        return;
    }

    if(err instanceof Joi.ValidationError){
        res.status(400).json(err.message);
        return        
    }

    res.status(400).json(err.message);
    return;
}

export default handleError;