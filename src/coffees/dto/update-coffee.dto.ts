import { PartialType } from "@nestjs/mapped-types";
import { CreateCoffeeDto } from "./create-coffee.dto";

// this copies every type of CreateCoffeeDto to UpdateCoffeeDto and sets them to optional.
export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}
