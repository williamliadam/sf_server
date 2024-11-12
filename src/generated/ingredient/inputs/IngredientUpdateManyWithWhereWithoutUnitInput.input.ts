import * as NestJsGraphQL from "@nestjs/graphql";
import { IngredientScalarWhereInput } from "../../ingredient/inputs/IngredientScalarWhereInput.input";
import { IngredientUpdateManyMutationInput } from "../../ingredient/inputs/IngredientUpdateManyMutationInput.input";

@NestJsGraphQL.InputType('IngredientUpdateManyWithWhereWithoutUnitInput', { isAbstract: true })
export class IngredientUpdateManyWithWhereWithoutUnitInput {
  @NestJsGraphQL.Field(() => IngredientScalarWhereInput)
  where!: IngredientScalarWhereInput;

  @NestJsGraphQL.Field(() => IngredientUpdateManyMutationInput)
  data!: IngredientUpdateManyMutationInput;
}