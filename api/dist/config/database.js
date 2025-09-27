import { PrismaClient } from "@prisma/client";
export class Prisma {
    prisma = new PrismaClient();
    async connection() {
        return this.prisma;
    }
}
//# sourceMappingURL=database.js.map