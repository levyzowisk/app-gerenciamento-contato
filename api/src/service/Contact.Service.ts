import ContactRepository from "../repository/Contact.Repository.js"
export class ContactService {
    static async find() {
        return await ContactRepository.find();
    }
}

