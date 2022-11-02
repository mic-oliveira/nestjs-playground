import {CustomerModel} from "../models/customer.model";
import {RepositoryInterface} from "./repository.interface";

export class CustomerRepository implements RepositoryInterface<CustomerModel>{

    findAll() {
        return CustomerModel.findAll();
    }

    findBy(search: object) {
    }

    insert(model: CustomerModel) {
    }

}
