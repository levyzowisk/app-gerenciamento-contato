import ContactRepository from "../repository/Contact.Repository.js";
export class ContactService {
    static async find() {
        return await ContactRepository.find();
    }
    static async remove(id) {
        await ContactRepository.remove(id);
    }
}
//# sourceMappingURL=Contact.Service.js.map