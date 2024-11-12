import * as NestJsGraphQL from "@nestjs/graphql";
import { RecipeScalarWhereInput } from "../../recipe/inputs/RecipeScalarWhereInput.input";
import { RecipeUpdateManyMutationInput } from "../../recipe/inputs/RecipeUpdateManyMutationInput.input";

@NestJsGraphQL.InputType('RecipeUpdateManyWithWhereWithoutAuthorInput', { isAbstract: true })
export class RecipeUpdateManyWithWhereWithoutAuthorInput {
  @NestJsGraphQL.Field(() => RecipeScalarWhereInput)
  where!: RecipeScalarWhereInput;

  @NestJsGraphQL.Field(() => RecipeUpdateManyMutationInput)
  data!: RecipeUpdateManyMutationInput;
}
