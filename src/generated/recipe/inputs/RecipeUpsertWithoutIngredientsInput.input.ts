import * as NestJsGraphQL from "@nestjs/graphql";
import { RecipeCreateWithoutIngredientsInput } from "../../recipe/inputs/RecipeCreateWithoutIngredientsInput.input";
import { RecipeUpdateWithoutIngredientsInput } from "../../recipe/inputs/RecipeUpdateWithoutIngredientsInput.input";

@NestJsGraphQL.InputType('RecipeUpsertWithoutIngredientsInput', { isAbstract: true })
export class RecipeUpsertWithoutIngredientsInput {
  @NestJsGraphQL.Field(() => RecipeUpdateWithoutIngredientsInput)
  update!: RecipeUpdateWithoutIngredientsInput;

  @NestJsGraphQL.Field(() => RecipeCreateWithoutIngredientsInput)
  create!: RecipeCreateWithoutIngredientsInput;
}
