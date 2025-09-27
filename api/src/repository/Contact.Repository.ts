import { Prisma } from "../config/database.js";
export class ContactRepository {
    constructor (private readonly prisma =  new Prisma) {}

    async find() {
        
    }
}