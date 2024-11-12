import * as NestJsGraphQL from "@nestjs/graphql";
import { IngredientCreateWithoutMaterialInput } from "../../ingredient/inputs/IngredientCreateWithoutMaterialInput.input";
import { IngredientUpdateWithoutMaterialInput } from "../../ingredient/inputs/IngredientUpdateWithoutMaterialInput.input";
import { IngredientWhereUniqueInput } from "../../ingredient/inputs/IngredientWhereUniqueInput.input";

@NestJsGraphQL.InputType('IngredientUpsertWithWhereUniqueWithoutMaterialInput', { isAbstract: true })
export class IngredientUpsertWithWhereUniqueWithoutMaterialInput {
  @NestJsGraphQL.Field(() => IngredientWhereUniqueInput)
  where!: IngredientWhereUniqueInput;

  @NestJsGraphQL.Field(() => IngredientUpdateWithoutMaterialInput)
  update!: IngredientUpdateWithoutMaterialInput;

  @NestJsGraphQL.Field(() => IngredientCreateWithoutMaterialInput)
  create!: IngredientCreateWithoutMaterialInput;
}
