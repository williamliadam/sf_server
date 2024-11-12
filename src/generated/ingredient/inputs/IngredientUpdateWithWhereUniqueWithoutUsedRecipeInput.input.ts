import * as NestJsGraphQL from "@nestjs/graphql";
import { IngredientUpdateWithoutUsedRecipeInput } from "../../ingredient/inputs/IngredientUpdateWithoutUsedRecipeInput.input";
import { IngredientWhereUniqueInput } from "../../ingredient/inputs/IngredientWhereUniqueInput.input";

@NestJsGraphQL.InputType('IngredientUpdateWithWhereUniqueWithoutUsedRecipeInput', { isAbstract: true })
export class IngredientUpdateWithWhereUniqueWithoutUsedRecipeInput {
  @NestJsGraphQL.Field(() => IngredientWhereUniqueInput)
  where!: IngredientWhereUniqueInput;

  @NestJsGraphQL.Field(() => IngredientUpdateWithoutUsedRecipeInput)
  data!: IngredientUpdateWithoutUsedRecipeInput;
}
