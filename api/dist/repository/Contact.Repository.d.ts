import { Prisma } from "../config/database.js";
import { IContact } from "../interface/contact.interface.js";
declare class ContactRepository {
    private readonly prisma;
    constructor(prisma?: Prisma);
    find(): Promise<IContact[]>;
}
declare const _default: ContactRepository;
export default _default;
