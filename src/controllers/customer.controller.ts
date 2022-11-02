import {Controller, Get, HttpStatus, Param, Post, Req, Res} from "@nestjs/common";
import {CustomerService} from "../services/customer.service";
import {CustomerModel} from "../models/customer.model";
import {Response} from "express";

@Controller({
    path: 'customers'
})
export class CustomerController {

    constructor(private service:CustomerService) {
    }

    @Get()
    async get() {
        return this.service.list();
    }

    @Post()
    async post(@Req() request, @Res({passthrough: true}) response: Response) {
        response.status(HttpStatus.CREATED);
        return this.service.create(request.body);

    }

    @Get(':id')
    find(@Param() id: string) {
        console.log(id);
        return this.service.find(id);
    }
}
