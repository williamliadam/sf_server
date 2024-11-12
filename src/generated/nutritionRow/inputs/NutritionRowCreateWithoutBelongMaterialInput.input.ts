import * as NestJsGraphQL from "@nestjs/graphql";
import { NutritionCreateNestedOneWithoutUsedRowInput } from "../../nutrition/inputs/NutritionCreateNestedOneWithoutUsedRowInput.input";

@NestJsGraphQL.InputType('NutritionRowCreateWithoutBelongMaterialInput', { isAbstract: true })
export class NutritionRowCreateWithoutBelongMaterialInput {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  percent!: number;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  createdAt?: Date | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  updatedAt?: Date | undefined;

  @NestJsGraphQL.Field(() => NutritionCreateNestedOneWithoutUsedRowInput)
  nutirtion!: NutritionCreateNestedOneWithoutUsedRowInput;
}
