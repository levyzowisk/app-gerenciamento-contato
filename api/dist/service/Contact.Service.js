import ContactRepository from "../repository/Contact.Repository.js";
import BaseError from "../utils/BaseError.utils.js";
export class ContactService {
    static async find() {
        return await ContactRepository.find();
    }
    static async remove(id) {
        await ContactRepository.remove(id);
    }
    static async findByPhone(phone) {
        return await ContactRepository.findByPhone(phone);
    }
    static async create(data) {
        if (await this.findByPhone(data.phone)) {
            throw new BaseError(409, 'Contato já existente');
        }
        return await ContactRepository.insert(data);
    }
    static async update(id, data) {
        return await ContactRepository.update(id, data);
    }
}
//# sourceMappingURL=Contact.Service.js.map