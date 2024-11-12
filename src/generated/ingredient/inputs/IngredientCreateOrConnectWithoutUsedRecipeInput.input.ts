import * as NestJsGraphQL from "@nestjs/graphql";
import { IngredientCreateWithoutUsedRecipeInput } from "../../ingredient/inputs/IngredientCreateWithoutUsedRecipeInput.input";
import { IngredientWhereUniqueInput } from "../../ingredient/inputs/IngredientWhereUniqueInput.input";

@NestJsGraphQL.InputType('IngredientCreateOrConnectWithoutUsedRecipeInput', { isAbstract: true })
export class IngredientCreateOrConnectWithoutUsedRecipeInput {
  @NestJsGraphQL.Field(() => IngredientWhereUniqueInput)
  where!: IngredientWhereUniqueInput;

  @NestJsGraphQL.Field(() => IngredientCreateWithoutUsedRecipeInput)
  create!: IngredientCreateWithoutUsedRecipeInput;
}
