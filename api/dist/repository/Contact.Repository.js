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
    async insert(contact) {
        return await (await this.prisma.connection()).contact.create({
            data: contact
        });
    }
    async findByPhone(phone) {
        return await (await this.prisma.connection()).contact.findUnique({
            where: {
                phone
            }
        });
    }
    async update(id, contact) {
        return await (await this.prisma.connection()).contact.update({
            where: {
                id
            },
            data: contact
        });
    }
}
export default new ContactRepository;
//# sourceMappingURL=Contact.Repository.js.map