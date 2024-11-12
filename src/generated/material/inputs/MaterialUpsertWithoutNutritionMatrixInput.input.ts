import * as NestJsGraphQL from "@nestjs/graphql";
import { MaterialCreateWithoutNutritionMatrixInput } from "../../material/inputs/MaterialCreateWithoutNutritionMatrixInput.input";
import { MaterialUpdateWithoutNutritionMatrixInput } from "../../material/inputs/MaterialUpdateWithoutNutritionMatrixInput.input";

@NestJsGraphQL.InputType('MaterialUpsertWithoutNutritionMatrixInput', { isAbstract: true })
export class MaterialUpsertWithoutNutritionMatrixInput {
  @NestJsGraphQL.Field(() => MaterialUpdateWithoutNutritionMatrixInput)
  update!: MaterialUpdateWithoutNutritionMatrixInput;

  @NestJsGraphQL.Field(() => MaterialCreateWithoutNutritionMatrixInput)
  create!: MaterialCreateWithoutNutritionMatrixInput;
}
