import {Module} from '@nestjs/common';
import {CustomerModule} from "./modules/customer.module";
import {DatabaseModule} from "./modules/database.module";

@Module({
  imports: [CustomerModule, DatabaseModule],
})
export class AppModule {}
