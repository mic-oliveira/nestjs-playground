import {Sequelize} from "sequelize-typescript";
import {CustomerModel} from "../models/customer.model";

export const databaseProvider =
    {
        mysql: [{
            provide: Sequelize,
            useFactory: async () => {
                const db = new Sequelize({
                    dialect: 'mysql',
                    username: 'test',
                    password: '123456',
                    host: 'localhost',
                    port: 3306,
                    database: 'playground',
                })
                db.addModels([
                    CustomerModel,
                ])
                await db.sync();
                return db;
            },
        }],
        test: [{

        }]
    }

