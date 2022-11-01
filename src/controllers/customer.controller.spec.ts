import { Test, TestingModule } from '@nestjs/testing';
import {CustomerController} from "./customer.controller";


describe('AppController', () => {
  let appController: CustomerController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CustomerController],
    }).compile();

    appController = app.get<CustomerController>(CustomerController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.listCustomers()).toBe('teste');
    });
  });
});
