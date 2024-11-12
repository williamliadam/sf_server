import * as NestJsGraphQL from "@nestjs/graphql";
import { MaterialCreateNestedOneWithoutNutritionMatrixInput } from "../../material/inputs/MaterialCreateNestedOneWithoutNutritionMatrixInput.input";

@NestJsGraphQL.InputType('NutritionRowCreateWithoutNutirtionInput', { isAbstract: true })
export class NutritionRowCreateWithoutNutirtionInput {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  percent!: number;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  createdAt?: Date | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  updatedAt?: Date | undefined;

  @NestJsGraphQL.Field(() => MaterialCreateNestedOneWithoutNutritionMatrixInput)
  belongMaterial!: MaterialCreateNestedOneWithoutNutritionMatrixInput;
}
