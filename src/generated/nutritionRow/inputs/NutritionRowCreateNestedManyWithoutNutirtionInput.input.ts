import * as NestJsGraphQL from "@nestjs/graphql";
import { NutritionRowCreateManyNutirtionInputEnvelope } from "../../nutritionRow/inputs/NutritionRowCreateManyNutirtionInputEnvelope.input";
import { NutritionRowCreateOrConnectWithoutNutirtionInput } from "../../nutritionRow/inputs/NutritionRowCreateOrConnectWithoutNutirtionInput.input";
import { NutritionRowCreateWithoutNutirtionInput } from "../../nutritionRow/inputs/NutritionRowCreateWithoutNutirtionInput.input";
import { NutritionRowWhereUniqueInput } from "../../nutritionRow/inputs/NutritionRowWhereUniqueInput.input";

@NestJsGraphQL.InputType('NutritionRowCreateNestedManyWithoutNutirtionInput', { isAbstract: true })
export class NutritionRowCreateNestedManyWithoutNutirtionInput {
  @NestJsGraphQL.Field(() => [NutritionRowCreateWithoutNutirtionInput], { nullable: true })
  create?: NutritionRowCreateWithoutNutirtionInput[] | undefined;

  @NestJsGraphQL.Field(() => [NutritionRowCreateOrConnectWithoutNutirtionInput], { nullable: true })
  connectOrCreate?: NutritionRowCreateOrConnectWithoutNutirtionInput[] | undefined;

  @NestJsGraphQL.Field(() => NutritionRowCreateManyNutirtionInputEnvelope, { nullable: true })
  createMany?: NutritionRowCreateManyNutirtionInputEnvelope | undefined;

  @NestJsGraphQL.Field(() => [NutritionRowWhereUniqueInput], { nullable: true })
  connect?: NutritionRowWhereUniqueInput[] | undefined;
}
