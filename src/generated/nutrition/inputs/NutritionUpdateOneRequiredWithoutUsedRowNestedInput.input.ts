import * as NestJsGraphQL from "@nestjs/graphql";
import { NutritionCreateOrConnectWithoutUsedRowInput } from "../../nutrition/inputs/NutritionCreateOrConnectWithoutUsedRowInput.input";
import { NutritionCreateWithoutUsedRowInput } from "../../nutrition/inputs/NutritionCreateWithoutUsedRowInput.input";
import { NutritionUpdateWithoutUsedRowInput } from "../../nutrition/inputs/NutritionUpdateWithoutUsedRowInput.input";
import { NutritionUpsertWithoutUsedRowInput } from "../../nutrition/inputs/NutritionUpsertWithoutUsedRowInput.input";
import { NutritionWhereUniqueInput } from "../../nutrition/inputs/NutritionWhereUniqueInput.input";

@NestJsGraphQL.InputType('NutritionUpdateOneRequiredWithoutUsedRowNestedInput', { isAbstract: true })
export class NutritionUpdateOneRequiredWithoutUsedRowNestedInput {
  @NestJsGraphQL.Field(() => NutritionCreateWithoutUsedRowInput, { nullable: true })
  create?: NutritionCreateWithoutUsedRowInput | undefined;

  @NestJsGraphQL.Field(() => NutritionCreateOrConnectWithoutUsedRowInput, { nullable: true })
  connectOrCreate?: NutritionCreateOrConnectWithoutUsedRowInput | undefined;

  @NestJsGraphQL.Field(() => NutritionUpsertWithoutUsedRowInput, { nullable: true })
  upsert?: NutritionUpsertWithoutUsedRowInput | undefined;

  @NestJsGraphQL.Field(() => NutritionWhereUniqueInput, { nullable: true })
  connect?: NutritionWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NutritionUpdateWithoutUsedRowInput, { nullable: true })
  update?: NutritionUpdateWithoutUsedRowInput | undefined;
}
