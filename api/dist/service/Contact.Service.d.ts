import { IContact, IContactDto } from "../interface/contact.interface.js";
export declare class ContactService {
    static find(): Promise<IContact[]>;
    static remove(id: string): Promise<void>;
    private static findByPhone;
    static create(data: IContactDto): Promise<IContact>;
}
