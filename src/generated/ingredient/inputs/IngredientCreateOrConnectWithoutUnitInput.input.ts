import * as NestJsGraphQL from "@nestjs/graphql";
import { IngredientCreateWithoutUnitInput } from "../../ingredient/inputs/IngredientCreateWithoutUnitInput.input";
import { IngredientWhereUniqueInput } from "../../ingredient/inputs/IngredientWhereUniqueInput.input";

@NestJsGraphQL.InputType('IngredientCreateOrConnectWithoutUnitInput', { isAbstract: true })
export class IngredientCreateOrConnectWithoutUnitInput {
  @NestJsGraphQL.Field(() => IngredientWhereUniqueInput)
  where!: IngredientWhereUniqueInput;

  @NestJsGraphQL.Field(() => IngredientCreateWithoutUnitInput)
  create!: IngredientCreateWithoutUnitInput;
}
