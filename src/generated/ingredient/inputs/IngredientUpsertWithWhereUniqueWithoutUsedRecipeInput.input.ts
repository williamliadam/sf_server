import * as NestJsGraphQL from "@nestjs/graphql";
import { IngredientCreateWithoutUsedRecipeInput } from "../../ingredient/inputs/IngredientCreateWithoutUsedRecipeInput.input";
import { IngredientUpdateWithoutUsedRecipeInput } from "../../ingredient/inputs/IngredientUpdateWithoutUsedRecipeInput.input";
import { IngredientWhereUniqueInput } from "../../ingredient/inputs/IngredientWhereUniqueInput.input";

@NestJsGraphQL.InputType('IngredientUpsertWithWhereUniqueWithoutUsedRecipeInput', { isAbstract: true })
export class IngredientUpsertWithWhereUniqueWithoutUsedRecipeInput {
  @NestJsGraphQL.Field(() => IngredientWhereUniqueInput)
  where!: IngredientWhereUniqueInput;

  @NestJsGraphQL.Field(() => IngredientUpdateWithoutUsedRecipeInput)
  update!: IngredientUpdateWithoutUsedRecipeInput;

  @NestJsGraphQL.Field(() => IngredientCreateWithoutUsedRecipeInput)
  create!: IngredientCreateWithoutUsedRecipeInput;
}
