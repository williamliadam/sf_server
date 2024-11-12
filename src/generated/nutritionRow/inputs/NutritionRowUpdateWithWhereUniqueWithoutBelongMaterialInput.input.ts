import * as NestJsGraphQL from "@nestjs/graphql";
import { NutritionRowUpdateWithoutBelongMaterialInput } from "../../nutritionRow/inputs/NutritionRowUpdateWithoutBelongMaterialInput.input";
import { NutritionRowWhereUniqueInput } from "../../nutritionRow/inputs/NutritionRowWhereUniqueInput.input";

@NestJsGraphQL.InputType('NutritionRowUpdateWithWhereUniqueWithoutBelongMaterialInput', { isAbstract: true })
export class NutritionRowUpdateWithWhereUniqueWithoutBelongMaterialInput {
  @NestJsGraphQL.Field(() => NutritionRowWhereUniqueInput)
  where!: NutritionRowWhereUniqueInput;

  @NestJsGraphQL.Field(() => NutritionRowUpdateWithoutBelongMaterialInput)
  data!: NutritionRowUpdateWithoutBelongMaterialInput;
}
