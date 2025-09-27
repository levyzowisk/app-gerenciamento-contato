import { IContact, IContactDto } from "../interface/contact.interface.js";
import ContactRepository from "../repository/Contact.Repository.js"
import BaseError from "../utils/BaseError.utils.js";
export class ContactService {
    static async find(): Promise<IContact[]> {
        return await ContactRepository.find();
    }

    static async remove(id: string): Promise<void> {
        await ContactRepository.remove(id);
    }

    private static async findByPhone(phone: string): Promise<IContact | null> {
        return await ContactRepository.findByPhone(phone);
    }

    static async create(data: IContactDto): Promise<IContact> {
        if(await this.findByPhone(data.phone)) {
            throw new BaseError(409, 'Contato já existente');
        }
        return await ContactRepository.insert(data);
    }
}

