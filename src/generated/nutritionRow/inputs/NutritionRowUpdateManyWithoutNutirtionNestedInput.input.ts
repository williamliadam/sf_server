import * as NestJsGraphQL from "@nestjs/graphql";
import { NutritionRowCreateManyNutirtionInputEnvelope } from "../../nutritionRow/inputs/NutritionRowCreateManyNutirtionInputEnvelope.input";
import { NutritionRowCreateOrConnectWithoutNutirtionInput } from "../../nutritionRow/inputs/NutritionRowCreateOrConnectWithoutNutirtionInput.input";
import { NutritionRowCreateWithoutNutirtionInput } from "../../nutritionRow/inputs/NutritionRowCreateWithoutNutirtionInput.input";
import { NutritionRowScalarWhereInput } from "../../nutritionRow/inputs/NutritionRowScalarWhereInput.input";
import { NutritionRowUpdateManyWithWhereWithoutNutirtionInput } from "../../nutritionRow/inputs/NutritionRowUpdateManyWithWhereWithoutNutirtionInput.input";
import { NutritionRowUpdateWithWhereUniqueWithoutNutirtionInput } from "../../nutritionRow/inputs/NutritionRowUpdateWithWhereUniqueWithoutNutirtionInput.input";
import { NutritionRowUpsertWithWhereUniqueWithoutNutirtionInput } from "../../nutritionRow/inputs/NutritionRowUpsertWithWhereUniqueWithoutNutirtionInput.input";
import { NutritionRowWhereUniqueInput } from "../../nutritionRow/inputs/NutritionRowWhereUniqueInput.input";

@NestJsGraphQL.InputType('NutritionRowUpdateManyWithoutNutirtionNestedInput', { isAbstract: true })
export class NutritionRowUpdateManyWithoutNutirtionNestedInput {
  @NestJsGraphQL.Field(() => [NutritionRowCreateWithoutNutirtionInput], { nullable: true })
  create?: NutritionRowCreateWithoutNutirtionInput[] | undefined;

  @NestJsGraphQL.Field(() => [NutritionRowCreateOrConnectWithoutNutirtionInput], { nullable: true })
  connectOrCreate?: NutritionRowCreateOrConnectWithoutNutirtionInput[] | undefined;

  @NestJsGraphQL.Field(() => [NutritionRowUpsertWithWhereUniqueWithoutNutirtionInput], { nullable: true })
  upsert?: NutritionRowUpsertWithWhereUniqueWithoutNutirtionInput[] | undefined;

  @NestJsGraphQL.Field(() => NutritionRowCreateManyNutirtionInputEnvelope, { nullable: true })
  createMany?: NutritionRowCreateManyNutirtionInputEnvelope | undefined;

  @NestJsGraphQL.Field(() => [NutritionRowWhereUniqueInput], { nullable: true })
  set?: NutritionRowWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [NutritionRowWhereUniqueInput], { nullable: true })
  disconnect?: NutritionRowWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [NutritionRowWhereUniqueInput], { nullable: true })
  delete?: NutritionRowWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [NutritionRowWhereUniqueInput], { nullable: true })
  connect?: NutritionRowWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [NutritionRowUpdateWithWhereUniqueWithoutNutirtionInput], { nullable: true })
  update?: NutritionRowUpdateWithWhereUniqueWithoutNutirtionInput[] | undefined;

  @NestJsGraphQL.Field(() => [NutritionRowUpdateManyWithWhereWithoutNutirtionInput], { nullable: true })
  updateMany?: NutritionRowUpdateManyWithWhereWithoutNutirtionInput[] | undefined;

  @NestJsGraphQL.Field(() => [NutritionRowScalarWhereInput], { nullable: true })
  deleteMany?: NutritionRowScalarWhereInput[] | undefined;
}
