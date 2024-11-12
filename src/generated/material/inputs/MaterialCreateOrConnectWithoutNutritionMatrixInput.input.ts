import * as NestJsGraphQL from "@nestjs/graphql";
import { MaterialCreateWithoutNutritionMatrixInput } from "../../material/inputs/MaterialCreateWithoutNutritionMatrixInput.input";
import { MaterialWhereUniqueInput } from "../../material/inputs/MaterialWhereUniqueInput.input";

@NestJsGraphQL.InputType('MaterialCreateOrConnectWithoutNutritionMatrixInput', { isAbstract: true })
export class MaterialCreateOrConnectWithoutNutritionMatrixInput {
  @NestJsGraphQL.Field(() => MaterialWhereUniqueInput)
  where!: MaterialWhereUniqueInput;

  @NestJsGraphQL.Field(() => MaterialCreateWithoutNutritionMatrixInput)
  create!: MaterialCreateWithoutNutritionMatrixInput;
}
