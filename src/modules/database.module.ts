import {Module} from "@nestjs/common";
import {databaseProvider} from "../providers/database.provider";

@Module({
    providers: [...databaseProvider.mysql],
    exports: [...databaseProvider.mysql]
})
export class DatabaseModule {

}
