import * as NestJsGraphQL from "@nestjs/graphql";
import { RecipeCreateWithoutIngredientsInput } from "../../recipe/inputs/RecipeCreateWithoutIngredientsInput.input";
import { RecipeWhereUniqueInput } from "../../recipe/inputs/RecipeWhereUniqueInput.input";

@NestJsGraphQL.InputType('RecipeCreateOrConnectWithoutIngredientsInput', { isAbstract: true })
export class RecipeCreateOrConnectWithoutIngredientsInput {
  @NestJsGraphQL.Field(() => RecipeWhereUniqueInput)
  where!: RecipeWhereUniqueInput;

  @NestJsGraphQL.Field(() => RecipeCreateWithoutIngredientsInput)
  create!: RecipeCreateWithoutIngredientsInput;
}
