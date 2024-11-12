import * as NestJsGraphQL from "@nestjs/graphql";
import { NutritionCreateWithoutUsedRowInput } from "../../nutrition/inputs/NutritionCreateWithoutUsedRowInput.input";
import { NutritionUpdateWithoutUsedRowInput } from "../../nutrition/inputs/NutritionUpdateWithoutUsedRowInput.input";

@NestJsGraphQL.InputType('NutritionUpsertWithoutUsedRowInput', { isAbstract: true })
export class NutritionUpsertWithoutUsedRowInput {
  @NestJsGraphQL.Field(() => NutritionUpdateWithoutUsedRowInput)
  update!: NutritionUpdateWithoutUsedRowInput;

  @NestJsGraphQL.Field(() => NutritionCreateWithoutUsedRowInput)
  create!: NutritionCreateWithoutUsedRowInput;
}
