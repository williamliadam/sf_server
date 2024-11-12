import * as NestJsGraphQL from "@nestjs/graphql";
import { NutritionRowCreateWithoutBelongMaterialInput } from "../../nutritionRow/inputs/NutritionRowCreateWithoutBelongMaterialInput.input";
import { NutritionRowWhereUniqueInput } from "../../nutritionRow/inputs/NutritionRowWhereUniqueInput.input";

@NestJsGraphQL.InputType('NutritionRowCreateOrConnectWithoutBelongMaterialInput', { isAbstract: true })
export class NutritionRowCreateOrConnectWithoutBelongMaterialInput {
  @NestJsGraphQL.Field(() => NutritionRowWhereUniqueInput)
  where!: NutritionRowWhereUniqueInput;

  @NestJsGraphQL.Field(() => NutritionRowCreateWithoutBelongMaterialInput)
  create!: NutritionRowCreateWithoutBelongMaterialInput;
}
