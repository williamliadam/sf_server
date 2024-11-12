import * as NestJsGraphQL from "@nestjs/graphql";
import { IngredientCreateWithoutUnitInput } from "../../ingredient/inputs/IngredientCreateWithoutUnitInput.input";
import { IngredientUpdateWithoutUnitInput } from "../../ingredient/inputs/IngredientUpdateWithoutUnitInput.input";
import { IngredientWhereUniqueInput } from "../../ingredient/inputs/IngredientWhereUniqueInput.input";

@NestJsGraphQL.InputType('IngredientUpsertWithWhereUniqueWithoutUnitInput', { isAbstract: true })
export class IngredientUpsertWithWhereUniqueWithoutUnitInput {
  @NestJsGraphQL.Field(() => IngredientWhereUniqueInput)
  where!: IngredientWhereUniqueInput;

  @NestJsGraphQL.Field(() => IngredientUpdateWithoutUnitInput)
  update!: IngredientUpdateWithoutUnitInput;

  @NestJsGraphQL.Field(() => IngredientCreateWithoutUnitInput)
  create!: IngredientCreateWithoutUnitInput;
}
