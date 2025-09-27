import { Prisma } from "../config/database.js";
import { IContact } from "../interface/contact.interface.js";
class ContactRepository {
    constructor (private readonly prisma =  new Prisma) {}

    async find(): Promise<IContact[]> {
        return (await this.prisma.connection()).contact.findMany();
    }

    
}

export default new ContactRepository;