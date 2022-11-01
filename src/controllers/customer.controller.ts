import {Controller, Get} from "@nestjs/common";

@Controller()
export class CustomerController {
    @Get('customers')
    listCustomers() {
        return 'teste';
    }
}
