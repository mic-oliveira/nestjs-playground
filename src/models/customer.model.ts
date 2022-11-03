import {Column, Model, Table} from "sequelize-typescript";

@Table({tableName: 'customers'})
export class CustomerModel extends Model<CustomerModel>{

    @Column
    name: string;
}
