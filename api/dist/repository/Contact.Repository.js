import { Prisma } from "../config/database.js";
class ContactRepository {
    prisma;
    constructor(prisma = new Prisma) {
        this.prisma = prisma;
    }
    async find() {
        return await (await this.prisma.connection()).contact.findMany();
    }
    async remove(id) {
        await (await this.prisma.connection()).contact.delete({
            where: {
                id
            }
        });
    }
}
export default new ContactRepository;
//# sourceMappingURL=Contact.Repository.js.map