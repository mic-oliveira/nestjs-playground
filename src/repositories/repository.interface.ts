import {Model} from "sequelize-typescript";

export interface RepositoryInterface<M extends Model> {
    findAll()
    findBy(search: object);
    insert(model: M);
}
