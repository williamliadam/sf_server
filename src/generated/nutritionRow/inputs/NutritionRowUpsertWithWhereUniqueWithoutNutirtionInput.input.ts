import * as NestJsGraphQL from "@nestjs/graphql";
import { NutritionRowCreateWithoutNutirtionInput } from "../../nutritionRow/inputs/NutritionRowCreateWithoutNutirtionInput.input";
import { NutritionRowUpdateWithoutNutirtionInput } from "../../nutritionRow/inputs/NutritionRowUpdateWithoutNutirtionInput.input";
import { NutritionRowWhereUniqueInput } from "../../nutritionRow/inputs/NutritionRowWhereUniqueInput.input";

@NestJsGraphQL.InputType('NutritionRowUpsertWithWhereUniqueWithoutNutirtionInput', { isAbstract: true })
export class NutritionRowUpsertWithWhereUniqueWithoutNutirtionInput {
  @NestJsGraphQL.Field(() => NutritionRowWhereUniqueInput)
  where!: NutritionRowWhereUniqueInput;

  @NestJsGraphQL.Field(() => NutritionRowUpdateWithoutNutirtionInput)
  update!: NutritionRowUpdateWithoutNutirtionInput;

  @NestJsGraphQL.Field(() => NutritionRowCreateWithoutNutirtionInput)
  create!: NutritionRowCreateWithoutNutirtionInput;
}
