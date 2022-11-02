import {Module} from "@nestjs/common";
import {CustomerController} from "../controllers/customer.controller";
import {CustomerService} from "../services/customer.service";
import {CustomerModel} from "../models/customer.model";
import {CustomerRepository} from "../repositories/customer.repository";

@Module({
    controllers: [CustomerController],
    providers: [CustomerService, CustomerModel, CustomerRepository]
})
export class CustomerModule {}
