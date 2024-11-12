import * as NestJsGraphQL from "@nestjs/graphql";
import { MaterialCreateNestedOneWithoutNutritionMatrixInput } from "../../material/inputs/MaterialCreateNestedOneWithoutNutritionMatrixInput.input";
import { NutritionCreateNestedOneWithoutUsedRowInput } from "../../nutrition/inputs/NutritionCreateNestedOneWithoutUsedRowInput.input";

@NestJsGraphQL.InputType('NutritionRowCreateInput', { isAbstract: true })
export class NutritionRowCreateInput {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  percent!: number;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  createdAt?: Date | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  updatedAt?: Date | undefined;

  @NestJsGraphQL.Field(() => NutritionCreateNestedOneWithoutUsedRowInput)
  nutirtion!: NutritionCreateNestedOneWithoutUsedRowInput;

  @NestJsGraphQL.Field(() => MaterialCreateNestedOneWithoutNutritionMatrixInput)
  belongMaterial!: MaterialCreateNestedOneWithoutNutritionMatrixInput;
}
