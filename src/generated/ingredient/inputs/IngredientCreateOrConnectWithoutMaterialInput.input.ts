import * as NestJsGraphQL from "@nestjs/graphql";
import { IngredientCreateWithoutMaterialInput } from "../../ingredient/inputs/IngredientCreateWithoutMaterialInput.input";
import { IngredientWhereUniqueInput } from "../../ingredient/inputs/IngredientWhereUniqueInput.input";

@NestJsGraphQL.InputType('IngredientCreateOrConnectWithoutMaterialInput', { isAbstract: true })
export class IngredientCreateOrConnectWithoutMaterialInput {
  @NestJsGraphQL.Field(() => IngredientWhereUniqueInput)
  where!: IngredientWhereUniqueInput;

  @NestJsGraphQL.Field(() => IngredientCreateWithoutMaterialInput)
  create!: IngredientCreateWithoutMaterialInput;
}
