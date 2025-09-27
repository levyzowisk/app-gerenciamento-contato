export declare class ContactService {
    static find(): Promise<import("../interface/contact.interface.js").IContact[]>;
    static remove(id: string): Promise<void>;
}
