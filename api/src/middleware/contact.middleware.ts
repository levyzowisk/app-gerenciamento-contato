import { Prisma } from '@prisma/client';
import {NextFunction, Request, Response} from 'express';

const handleError = (err: Error, req: Request, res: Response, next: NextFunction) => {
    
    if(err instanceof Prisma.PrismaClientKnownRequestError) {
        
        if(err.code === 'P2025') {
            res.status(404).json('Recurso não encontrado!');
            return
        }
    }

    res.status(400).json(err.message);
    return;
}

export default handleError;