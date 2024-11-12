import * as NestJsGraphQL from "@nestjs/graphql";
import { RecipeCreateWithoutUsedDishTemplatesInput } from "../../recipe/inputs/RecipeCreateWithoutUsedDishTemplatesInput.input";
import { RecipeUpdateWithoutUsedDishTemplatesInput } from "../../recipe/inputs/RecipeUpdateWithoutUsedDishTemplatesInput.input";

@NestJsGraphQL.InputType('RecipeUpsertWithoutUsedDishTemplatesInput', { isAbstract: true })
export class RecipeUpsertWithoutUsedDishTemplatesInput {
  @NestJsGraphQL.Field(() => RecipeUpdateWithoutUsedDishTemplatesInput)
  update!: RecipeUpdateWithoutUsedDishTemplatesInput;

  @NestJsGraphQL.Field(() => RecipeCreateWithoutUsedDishTemplatesInput)
  create!: RecipeCreateWithoutUsedDishTemplatesInput;
}
