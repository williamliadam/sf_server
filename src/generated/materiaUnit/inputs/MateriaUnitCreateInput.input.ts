import * as NestJsGraphQL from "@nestjs/graphql";
import { IngredientCreateNestedManyWithoutUnitInput } from "../../ingredient/inputs/IngredientCreateNestedManyWithoutUnitInput.input";

@NestJsGraphQL.InputType('MateriaUnitCreateInput', { isAbstract: true })
export class MateriaUnitCreateInput {
  @NestJsGraphQL.Field(() => String)
  code!: string;

  @NestJsGraphQL.Field(() => String)
  name!: string;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  toKilo!: number;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  createdAt?: Date | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  updatedAt?: Date | undefined;

  @NestJsGraphQL.Field(() => IngredientCreateNestedManyWithoutUnitInput, { nullable: true })
  ingredients?: IngredientCreateNestedManyWithoutUnitInput | undefined;
}
