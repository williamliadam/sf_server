import * as NestJsGraphQL from "@nestjs/graphql";
import { NutritionRowUpdateWithoutNutirtionInput } from "../../nutritionRow/inputs/NutritionRowUpdateWithoutNutirtionInput.input";
import { NutritionRowWhereUniqueInput } from "../../nutritionRow/inputs/NutritionRowWhereUniqueInput.input";

@NestJsGraphQL.InputType('NutritionRowUpdateWithWhereUniqueWithoutNutirtionInput', { isAbstract: true })
export class NutritionRowUpdateWithWhereUniqueWithoutNutirtionInput {
  @NestJsGraphQL.Field(() => NutritionRowWhereUniqueInput)
  where!: NutritionRowWhereUniqueInput;

  @NestJsGraphQL.Field(() => NutritionRowUpdateWithoutNutirtionInput)
  data!: NutritionRowUpdateWithoutNutirtionInput;
}
