import * as NestJsGraphQL from "@nestjs/graphql";
import { RecipeUpdateWithoutAuthorInput } from "../../recipe/inputs/RecipeUpdateWithoutAuthorInput.input";
import { RecipeWhereUniqueInput } from "../../recipe/inputs/RecipeWhereUniqueInput.input";

@NestJsGraphQL.InputType('RecipeUpdateWithWhereUniqueWithoutAuthorInput', { isAbstract: true })
export class RecipeUpdateWithWhereUniqueWithoutAuthorInput {
  @NestJsGraphQL.Field(() => RecipeWhereUniqueInput)
  where!: RecipeWhereUniqueInput;

  @NestJsGraphQL.Field(() => RecipeUpdateWithoutAuthorInput)
  data!: RecipeUpdateWithoutAuthorInput;
}
