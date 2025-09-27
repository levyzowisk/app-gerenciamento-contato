import { Prisma } from "../config/database.js";
import { IContact } from "../interface/contact.interface.js";
class ContactRepository {
    constructor (private readonly prisma =  new Prisma) {}

    async find(): Promise<IContact[]> {
        return await (await this.prisma.connection()).contact.findMany();
    }

    async remove(id: string): Promise<void> {
        await (await this.prisma.connection()).contact.delete({
            where: {
                id
            }
        })
        
    }
     
}

export default new ContactRepository;