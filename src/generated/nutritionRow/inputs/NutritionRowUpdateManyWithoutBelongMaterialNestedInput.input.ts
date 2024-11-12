import * as NestJsGraphQL from "@nestjs/graphql";
import { NutritionRowCreateManyBelongMaterialInputEnvelope } from "../../nutritionRow/inputs/NutritionRowCreateManyBelongMaterialInputEnvelope.input";
import { NutritionRowCreateOrConnectWithoutBelongMaterialInput } from "../../nutritionRow/inputs/NutritionRowCreateOrConnectWithoutBelongMaterialInput.input";
import { NutritionRowCreateWithoutBelongMaterialInput } from "../../nutritionRow/inputs/NutritionRowCreateWithoutBelongMaterialInput.input";
import { NutritionRowScalarWhereInput } from "../../nutritionRow/inputs/NutritionRowScalarWhereInput.input";
import { NutritionRowUpdateManyWithWhereWithoutBelongMaterialInput } from "../../nutritionRow/inputs/NutritionRowUpdateManyWithWhereWithoutBelongMaterialInput.input";
import { NutritionRowUpdateWithWhereUniqueWithoutBelongMaterialInput } from "../../nutritionRow/inputs/NutritionRowUpdateWithWhereUniqueWithoutBelongMaterialInput.input";
import { NutritionRowUpsertWithWhereUniqueWithoutBelongMaterialInput } from "../../nutritionRow/inputs/NutritionRowUpsertWithWhereUniqueWithoutBelongMaterialInput.input";
import { NutritionRowWhereUniqueInput } from "../../nutritionRow/inputs/NutritionRowWhereUniqueInput.input";

@NestJsGraphQL.InputType('NutritionRowUpdateManyWithoutBelongMaterialNestedInput', { isAbstract: true })
export class NutritionRowUpdateManyWithoutBelongMaterialNestedInput {
  @NestJsGraphQL.Field(() => [NutritionRowCreateWithoutBelongMaterialInput], { nullable: true })
  create?: NutritionRowCreateWithoutBelongMaterialInput[] | undefined;

  @NestJsGraphQL.Field(() => [NutritionRowCreateOrConnectWithoutBelongMaterialInput], { nullable: true })
  connectOrCreate?: NutritionRowCreateOrConnectWithoutBelongMaterialInput[] | undefined;

  @NestJsGraphQL.Field(() => [NutritionRowUpsertWithWhereUniqueWithoutBelongMaterialInput], { nullable: true })
  upsert?: NutritionRowUpsertWithWhereUniqueWithoutBelongMaterialInput[] | undefined;

  @NestJsGraphQL.Field(() => NutritionRowCreateManyBelongMaterialInputEnvelope, { nullable: true })
  createMany?: NutritionRowCreateManyBelongMaterialInputEnvelope | undefined;

  @NestJsGraphQL.Field(() => [NutritionRowWhereUniqueInput], { nullable: true })
  set?: NutritionRowWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [NutritionRowWhereUniqueInput], { nullable: true })
  disconnect?: NutritionRowWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [NutritionRowWhereUniqueInput], { nullable: true })
  delete?: NutritionRowWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [NutritionRowWhereUniqueInput], { nullable: true })
  connect?: NutritionRowWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [NutritionRowUpdateWithWhereUniqueWithoutBelongMaterialInput], { nullable: true })
  update?: NutritionRowUpdateWithWhereUniqueWithoutBelongMaterialInput[] | undefined;

  @NestJsGraphQL.Field(() => [NutritionRowUpdateManyWithWhereWithoutBelongMaterialInput], { nullable: true })
  updateMany?: NutritionRowUpdateManyWithWhereWithoutBelongMaterialInput[] | undefined;

  @NestJsGraphQL.Field(() => [NutritionRowScalarWhereInput], { nullable: true })
  deleteMany?: NutritionRowScalarWhereInput[] | undefined;
}
