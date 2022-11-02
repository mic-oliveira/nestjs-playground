import {CustomerModel} from "../models/customer.model";
import {Injectable} from "@nestjs/common";

@Injectable()
export class CustomerService {


    async list() {
        return await CustomerModel.findAll() ?? [];
    }

    async create(customer) {
        return await CustomerModel.create(customer)
    }

    async find(id) {
        return await CustomerModel.findByPk(id.valueOf());
    }

}
