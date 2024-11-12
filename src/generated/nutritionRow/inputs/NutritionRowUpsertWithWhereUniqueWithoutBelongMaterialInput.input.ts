import * as NestJsGraphQL from "@nestjs/graphql";
import { NutritionRowCreateWithoutBelongMaterialInput } from "../../nutritionRow/inputs/NutritionRowCreateWithoutBelongMaterialInput.input";
import { NutritionRowUpdateWithoutBelongMaterialInput } from "../../nutritionRow/inputs/NutritionRowUpdateWithoutBelongMaterialInput.input";
import { NutritionRowWhereUniqueInput } from "../../nutritionRow/inputs/NutritionRowWhereUniqueInput.input";

@NestJsGraphQL.InputType('NutritionRowUpsertWithWhereUniqueWithoutBelongMaterialInput', { isAbstract: true })
export class NutritionRowUpsertWithWhereUniqueWithoutBelongMaterialInput {
  @NestJsGraphQL.Field(() => NutritionRowWhereUniqueInput)
  where!: NutritionRowWhereUniqueInput;

  @NestJsGraphQL.Field(() => NutritionRowUpdateWithoutBelongMaterialInput)
  update!: NutritionRowUpdateWithoutBelongMaterialInput;

  @NestJsGraphQL.Field(() => NutritionRowCreateWithoutBelongMaterialInput)
  create!: NutritionRowCreateWithoutBelongMaterialInput;
}
