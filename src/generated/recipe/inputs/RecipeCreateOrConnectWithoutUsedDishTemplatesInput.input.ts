import * as NestJsGraphQL from "@nestjs/graphql";
import { RecipeCreateWithoutUsedDishTemplatesInput } from "../../recipe/inputs/RecipeCreateWithoutUsedDishTemplatesInput.input";
import { RecipeWhereUniqueInput } from "../../recipe/inputs/RecipeWhereUniqueInput.input";

@NestJsGraphQL.InputType('RecipeCreateOrConnectWithoutUsedDishTemplatesInput', { isAbstract: true })
export class RecipeCreateOrConnectWithoutUsedDishTemplatesInput {
  @NestJsGraphQL.Field(() => RecipeWhereUniqueInput)
  where!: RecipeWhereUniqueInput;

  @NestJsGraphQL.Field(() => RecipeCreateWithoutUsedDishTemplatesInput)
  create!: RecipeCreateWithoutUsedDishTemplatesInput;
}
