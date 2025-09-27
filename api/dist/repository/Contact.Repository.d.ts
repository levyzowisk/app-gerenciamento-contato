import { Prisma } from "../config/database.js";
import { IContact } from "../interface/contact.interface.js";
declare class ContactRepository {
    private readonly prisma;
    constructor(prisma?: Prisma);
    find(): Promise<IContact[]>;
    remove(id: string): Promise<void>;
}
declare const _default: ContactRepository;
export default _default;
