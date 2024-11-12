import * as NestJsGraphQL from "@nestjs/graphql";
import { IngredientUpdateWithoutMaterialInput } from "../../ingredient/inputs/IngredientUpdateWithoutMaterialInput.input";
import { IngredientWhereUniqueInput } from "../../ingredient/inputs/IngredientWhereUniqueInput.input";

@NestJsGraphQL.InputType('IngredientUpdateWithWhereUniqueWithoutMaterialInput', { isAbstract: true })
export class IngredientUpdateWithWhereUniqueWithoutMaterialInput {
  @NestJsGraphQL.Field(() => IngredientWhereUniqueInput)
  where!: IngredientWhereUniqueInput;

  @NestJsGraphQL.Field(() => IngredientUpdateWithoutMaterialInput)
  data!: IngredientUpdateWithoutMaterialInput;
}
