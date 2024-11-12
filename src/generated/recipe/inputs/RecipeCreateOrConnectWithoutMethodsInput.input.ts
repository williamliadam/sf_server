import * as NestJsGraphQL from "@nestjs/graphql";
import { RecipeCreateWithoutMethodsInput } from "../../recipe/inputs/RecipeCreateWithoutMethodsInput.input";
import { RecipeWhereUniqueInput } from "../../recipe/inputs/RecipeWhereUniqueInput.input";

@NestJsGraphQL.InputType('RecipeCreateOrConnectWithoutMethodsInput', { isAbstract: true })
export class RecipeCreateOrConnectWithoutMethodsInput {
  @NestJsGraphQL.Field(() => RecipeWhereUniqueInput)
  where!: RecipeWhereUniqueInput;

  @NestJsGraphQL.Field(() => RecipeCreateWithoutMethodsInput)
  create!: RecipeCreateWithoutMethodsInput;
}
