import ContactRepository from "../repository/Contact.Repository.js";
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
            throw new Error('Contato já existente');
        }
        return await ContactRepository.insert(data);
    }
}
//# sourceMappingURL=Contact.Service.js.map