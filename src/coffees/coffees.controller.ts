import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from "@nestjs/common";
import { CoffeesService } from "./coffees.service";

@Controller("coffees")
export class CoffeesController {
  // add a controller to inject a service
  constructor(private readonly coffeesService: CoffeesService) {}

  // This implements a Pagination with Query Parameters.
  // example url: http://localhost:3000/coffees?limit=1&offset=2
  // @Get()
  // findAll(@Query() paginationQuery) {
  //   const { limit, offset } = paginationQuery;
  //   return `This action returns all coffees. Limit: ${limit}, offset: ${offset}`;
  // }
  //
  // this method returns the entire coffee data
  @Get()
  findAll(@Query() paginationQuery) {
    return this.coffeesService.findAll();
  }

  // findZero & findOne actually have the same effect.
  // choose one of these you like
  //   @Get(':id')
  //   findZero(@Param('id') id: string) {
  //     return `This action returns #${id} coffee`;
  //   }
  @Get(":id")
  findOne(@Param() params) {
    // return `This action returns #${params.id} coffee`;
    return this.coffeesService.findOne(params.id);
  }

  @Post()
  create(@Body("name") body) {
    return this.coffeesService.create(body);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() body) {
    return this.coffeesService.update(id, body);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.coffeesService.remove(id);
  }
}
