import * as NestJsGraphQL from "@nestjs/graphql";
import { RecipeCreateWithoutUsedDishPlansInput } from "../../recipe/inputs/RecipeCreateWithoutUsedDishPlansInput.input";
import { RecipeWhereUniqueInput } from "../../recipe/inputs/RecipeWhereUniqueInput.input";

@NestJsGraphQL.InputType('RecipeCreateOrConnectWithoutUsedDishPlansInput', { isAbstract: true })
export class RecipeCreateOrConnectWithoutUsedDishPlansInput {
  @NestJsGraphQL.Field(() => RecipeWhereUniqueInput)
  where!: RecipeWhereUniqueInput;

  @NestJsGraphQL.Field(() => RecipeCreateWithoutUsedDishPlansInput)
  create!: RecipeCreateWithoutUsedDishPlansInput;
}
