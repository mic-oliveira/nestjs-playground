import {Test, TestingModule} from '@nestjs/testing';
import {CustomerModel} from "../models/customer.model";
import {CustomerRepository} from "../repositories/customer.repository";
import {DatabaseModule} from "../modules/database.module";
import {CustomerService} from "./customer.service";
import {Sequelize} from "sequelize-typescript";


describe('Customer Service', () => {
    let customerService: CustomerService;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            imports: [DatabaseModule],
            providers: [CustomerService, CustomerRepository, CustomerModel]
        }).compile();

        customerService = app.get<CustomerService>(CustomerService);
    });

    describe('List', () => {
        it('should return customers list', async () => {
            jest.spyOn(CustomerModel, 'findAll')
                .mockImplementation(() => Promise.resolve(<CustomerModel[]>[{}]))
            const customers = await customerService.list();
            expect(customers).toBeInstanceOf(Array<CustomerModel>)
        });
    });
    describe('POST', () => {
        it('should create and return customer', async () => {
            jest.spyOn(CustomerModel, 'create')
                .mockImplementation(() => Promise.resolve(<CustomerModel[]>[{id: 1,name: 'Teste'}]))
            const customer = await customerService.create({name: 'Teste'})
            expect(customer.name).toBe('Teste')
        })
    })
});
