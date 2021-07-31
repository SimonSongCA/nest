import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CoffeesController } from "./coffees/coffees.controller";
import { CoffeesModule } from "./coffees/coffees.module";
import { CoffeesService } from "./coffees/coffees.service";

@Module({
  // Here controllers and providers of Coffee are not included since we have already imported the CoffeesModule.
  // Including the controllers and providers of Coffees will let them instantiate TWICE, which is a bad practice.
  imports: [CoffeesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
