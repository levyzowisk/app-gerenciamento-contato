import { Prisma } from "../config/database.js";
import { IContact, IContactDto } from "../interface/contact.interface.js";
declare class ContactRepository {
    private readonly prisma;
    constructor(prisma?: Prisma);
    find(): Promise<IContact[]>;
    remove(id: string): Promise<void>;
    insert(contact: IContactDto): Promise<{
        id: string;
        name: string;
        phone: string;
    }>;
    findByPhone(phone: string): Promise<IContact | null>;
}
declare const _default: ContactRepository;
export default _default;
