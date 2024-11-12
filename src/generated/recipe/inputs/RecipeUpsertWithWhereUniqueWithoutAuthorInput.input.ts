import * as NestJsGraphQL from "@nestjs/graphql";
import { RecipeCreateWithoutAuthorInput } from "../../recipe/inputs/RecipeCreateWithoutAuthorInput.input";
import { RecipeUpdateWithoutAuthorInput } from "../../recipe/inputs/RecipeUpdateWithoutAuthorInput.input";
import { RecipeWhereUniqueInput } from "../../recipe/inputs/RecipeWhereUniqueInput.input";

@NestJsGraphQL.InputType('RecipeUpsertWithWhereUniqueWithoutAuthorInput', { isAbstract: true })
export class RecipeUpsertWithWhereUniqueWithoutAuthorInput {
  @NestJsGraphQL.Field(() => RecipeWhereUniqueInput)
  where!: RecipeWhereUniqueInput;

  @NestJsGraphQL.Field(() => RecipeUpdateWithoutAuthorInput)
  update!: RecipeUpdateWithoutAuthorInput;

  @NestJsGraphQL.Field(() => RecipeCreateWithoutAuthorInput)
  create!: RecipeCreateWithoutAuthorInput;
}
