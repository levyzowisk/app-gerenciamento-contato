import { Prisma } from "../config/database.js";
import { IContact, IContactDto } from "../interface/contact.interface.js";
declare class ContactRepository {
    private readonly prisma;
    constructor(prisma?: Prisma);
    find(): Promise<IContact[]>;
    remove(id: string): Promise<void>;
    insert(contact: IContactDto): Promise<IContact>;
    findByPhone(phone: string): Promise<IContact | null>;
    update(id: string, contact: IContactDto): Promise<IContact>;
}
declare const _default: ContactRepository;
export default _default;
