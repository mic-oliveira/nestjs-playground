import {Column, Model, Table} from "sequelize-typescript";

@Table
export class CustomerModel extends Model<CustomerModel>{

    @Column
    name: string;
}
