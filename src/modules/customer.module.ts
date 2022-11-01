import {Module} from "@nestjs/common";
import {CustomerController} from "../controllers/customer.controller";
import {CustomerModel} from "../models/customer.model";
import {CustomerService} from "../services/customer.service";

@Module({
    controllers: [CustomerController],
    imports: [CustomerModel, CustomerService]
})
export class CustomerModule {}
