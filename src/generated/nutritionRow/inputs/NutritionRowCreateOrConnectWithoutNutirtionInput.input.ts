import * as NestJsGraphQL from "@nestjs/graphql";
import { NutritionRowCreateWithoutNutirtionInput } from "../../nutritionRow/inputs/NutritionRowCreateWithoutNutirtionInput.input";
import { NutritionRowWhereUniqueInput } from "../../nutritionRow/inputs/NutritionRowWhereUniqueInput.input";

@NestJsGraphQL.InputType('NutritionRowCreateOrConnectWithoutNutirtionInput', { isAbstract: true })
export class NutritionRowCreateOrConnectWithoutNutirtionInput {
  @NestJsGraphQL.Field(() => NutritionRowWhereUniqueInput)
  where!: NutritionRowWhereUniqueInput;

  @NestJsGraphQL.Field(() => NutritionRowCreateWithoutNutirtionInput)
  create!: NutritionRowCreateWithoutNutirtionInput;
}
