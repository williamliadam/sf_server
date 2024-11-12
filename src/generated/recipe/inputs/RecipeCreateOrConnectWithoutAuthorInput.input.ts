import * as NestJsGraphQL from "@nestjs/graphql";
import { RecipeCreateWithoutAuthorInput } from "../../recipe/inputs/RecipeCreateWithoutAuthorInput.input";
import { RecipeWhereUniqueInput } from "../../recipe/inputs/RecipeWhereUniqueInput.input";

@NestJsGraphQL.InputType('RecipeCreateOrConnectWithoutAuthorInput', { isAbstract: true })
export class RecipeCreateOrConnectWithoutAuthorInput {
  @NestJsGraphQL.Field(() => RecipeWhereUniqueInput)
  where!: RecipeWhereUniqueInput;

  @NestJsGraphQL.Field(() => RecipeCreateWithoutAuthorInput)
  create!: RecipeCreateWithoutAuthorInput;
}
