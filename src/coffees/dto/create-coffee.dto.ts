import { IsString } from "class-validator";

export class CreateCoffeeDto {
  // readonly: help maintain the immutability of the field.
  @IsString()
  readonly name: string;

  @IsString()
  readonly brand: string;

  @IsString({ each: true })
  readonly flavors: string[];
}
