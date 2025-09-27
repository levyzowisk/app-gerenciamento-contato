import { Prisma } from '@prisma/client';
const handleError = (err, req, res, next) => {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === 'P2025') {
            res.status(404).json('Recurso não encontrado!');
            return;
        }
    }
    res.status(400).json(err.message);
    return;
};
export default handleError;
//# sourceMappingURL=error.js.map