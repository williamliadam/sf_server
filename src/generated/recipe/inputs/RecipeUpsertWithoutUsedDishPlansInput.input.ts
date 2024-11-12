import * as NestJsGraphQL from "@nestjs/graphql";
import { RecipeCreateWithoutUsedDishPlansInput } from "../../recipe/inputs/RecipeCreateWithoutUsedDishPlansInput.input";
import { RecipeUpdateWithoutUsedDishPlansInput } from "../../recipe/inputs/RecipeUpdateWithoutUsedDishPlansInput.input";

@NestJsGraphQL.InputType('RecipeUpsertWithoutUsedDishPlansInput', { isAbstract: true })
export class RecipeUpsertWithoutUsedDishPlansInput {
  @NestJsGraphQL.Field(() => RecipeUpdateWithoutUsedDishPlansInput)
  update!: RecipeUpdateWithoutUsedDishPlansInput;

  @NestJsGraphQL.Field(() => RecipeCreateWithoutUsedDishPlansInput)
  create!: RecipeCreateWithoutUsedDishPlansInput;
}
