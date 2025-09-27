import { Prisma } from "../config/database.js";
class ContactRepository {
    prisma;
    constructor(prisma = new Prisma) {
        this.prisma = prisma;
    }
    async find() {
        return (await this.prisma.connection()).contact.findMany();
    }
}
export default new ContactRepository;
//# sourceMappingURL=Contact.Repository.js.map