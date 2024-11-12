import * as NestJsGraphQL from "@nestjs/graphql";
import { IngredientScalarWhereInput } from "../../ingredient/inputs/IngredientScalarWhereInput.input";
import { IngredientUpdateManyMutationInput } from "../../ingredient/inputs/IngredientUpdateManyMutationInput.input";

@NestJsGraphQL.InputType('IngredientUpdateManyWithWhereWithoutUsedRecipeInput', { isAbstract: true })
export class IngredientUpdateManyWithWhereWithoutUsedRecipeInput {
  @NestJsGraphQL.Field(() => IngredientScalarWhereInput)
  where!: IngredientScalarWhereInput;

  @NestJsGraphQL.Field(() => IngredientUpdateManyMutationInput)
  data!: IngredientUpdateManyMutationInput;
}
