import * as NestJsGraphQL from "@nestjs/graphql";
import { NutritionCreateWithoutUsedRowInput } from "../../nutrition/inputs/NutritionCreateWithoutUsedRowInput.input";
import { NutritionWhereUniqueInput } from "../../nutrition/inputs/NutritionWhereUniqueInput.input";

@NestJsGraphQL.InputType('NutritionCreateOrConnectWithoutUsedRowInput', { isAbstract: true })
export class NutritionCreateOrConnectWithoutUsedRowInput {
  @NestJsGraphQL.Field(() => NutritionWhereUniqueInput)
  where!: NutritionWhereUniqueInput;

  @NestJsGraphQL.Field(() => NutritionCreateWithoutUsedRowInput)
  create!: NutritionCreateWithoutUsedRowInput;
}
