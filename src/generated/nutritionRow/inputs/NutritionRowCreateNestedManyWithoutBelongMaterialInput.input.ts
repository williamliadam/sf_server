import * as NestJsGraphQL from "@nestjs/graphql";
import { NutritionRowCreateManyBelongMaterialInputEnvelope } from "../../nutritionRow/inputs/NutritionRowCreateManyBelongMaterialInputEnvelope.input";
import { NutritionRowCreateOrConnectWithoutBelongMaterialInput } from "../../nutritionRow/inputs/NutritionRowCreateOrConnectWithoutBelongMaterialInput.input";
import { NutritionRowCreateWithoutBelongMaterialInput } from "../../nutritionRow/inputs/NutritionRowCreateWithoutBelongMaterialInput.input";
import { NutritionRowWhereUniqueInput } from "../../nutritionRow/inputs/NutritionRowWhereUniqueInput.input";

@NestJsGraphQL.InputType('NutritionRowCreateNestedManyWithoutBelongMaterialInput', { isAbstract: true })
export class NutritionRowCreateNestedManyWithoutBelongMaterialInput {
  @NestJsGraphQL.Field(() => [NutritionRowCreateWithoutBelongMaterialInput], { nullable: true })
  create?: NutritionRowCreateWithoutBelongMaterialInput[] | undefined;

  @NestJsGraphQL.Field(() => [NutritionRowCreateOrConnectWithoutBelongMaterialInput], { nullable: true })
  connectOrCreate?: NutritionRowCreateOrConnectWithoutBelongMaterialInput[] | undefined;

  @NestJsGraphQL.Field(() => NutritionRowCreateManyBelongMaterialInputEnvelope, { nullable: true })
  createMany?: NutritionRowCreateManyBelongMaterialInputEnvelope | undefined;

  @NestJsGraphQL.Field(() => [NutritionRowWhereUniqueInput], { nullable: true })
  connect?: NutritionRowWhereUniqueInput[] | undefined;
}
