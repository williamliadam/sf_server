import * as NestJsGraphQL from "@nestjs/graphql";
import { IngredientUpdateWithoutUnitInput } from "../../ingredient/inputs/IngredientUpdateWithoutUnitInput.input";
import { IngredientWhereUniqueInput } from "../../ingredient/inputs/IngredientWhereUniqueInput.input";

@NestJsGraphQL.InputType('IngredientUpdateWithWhereUniqueWithoutUnitInput', { isAbstract: true })
export class IngredientUpdateWithWhereUniqueWithoutUnitInput {
  @NestJsGraphQL.Field(() => IngredientWhereUniqueInput)
  where!: IngredientWhereUniqueInput;

  @NestJsGraphQL.Field(() => IngredientUpdateWithoutUnitInput)
  data!: IngredientUpdateWithoutUnitInput;
}
