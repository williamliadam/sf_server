import * as NestJsGraphQL from "@nestjs/graphql";
import { NutritionCreateOrConnectWithoutUsedRowInput } from "../../nutrition/inputs/NutritionCreateOrConnectWithoutUsedRowInput.input";
import { NutritionCreateWithoutUsedRowInput } from "../../nutrition/inputs/NutritionCreateWithoutUsedRowInput.input";
import { NutritionWhereUniqueInput } from "../../nutrition/inputs/NutritionWhereUniqueInput.input";

@NestJsGraphQL.InputType('NutritionCreateNestedOneWithoutUsedRowInput', { isAbstract: true })
export class NutritionCreateNestedOneWithoutUsedRowInput {
  @NestJsGraphQL.Field(() => NutritionCreateWithoutUsedRowInput, { nullable: true })
  create?: NutritionCreateWithoutUsedRowInput | undefined;

  @NestJsGraphQL.Field(() => NutritionCreateOrConnectWithoutUsedRowInput, { nullable: true })
  connectOrCreate?: NutritionCreateOrConnectWithoutUsedRowInput | undefined;

  @NestJsGraphQL.Field(() => NutritionWhereUniqueInput, { nullable: true })
  connect?: NutritionWhereUniqueInput | undefined;
}
