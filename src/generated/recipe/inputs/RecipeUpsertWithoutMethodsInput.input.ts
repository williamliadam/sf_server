import * as NestJsGraphQL from "@nestjs/graphql";
import { RecipeCreateWithoutMethodsInput } from "../../recipe/inputs/RecipeCreateWithoutMethodsInput.input";
import { RecipeUpdateWithoutMethodsInput } from "../../recipe/inputs/RecipeUpdateWithoutMethodsInput.input";

@NestJsGraphQL.InputType('RecipeUpsertWithoutMethodsInput', { isAbstract: true })
export class RecipeUpsertWithoutMethodsInput {
  @NestJsGraphQL.Field(() => RecipeUpdateWithoutMethodsInput)
  update!: RecipeUpdateWithoutMethodsInput;

  @NestJsGraphQL.Field(() => RecipeCreateWithoutMethodsInput)
  create!: RecipeCreateWithoutMethodsInput;
}
