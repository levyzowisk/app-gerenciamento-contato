import { Prisma } from "../config/database.js";
import { IContact, IContactDto } from "../interface/contact.interface.js";
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

    async insert(contact: IContactDto) {
        return await (await this.prisma.connection()).contact.create({
            data: contact
        });
    }

    async findByPhone(phone: string): Promise<IContact | null> {
        return await (await this.prisma.connection()).contact.findUnique({
            where: {
                phone
            }
        })
    }
     
}

export default new ContactRepository;