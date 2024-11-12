import * as NestJsGraphQL from "@nestjs/graphql";
import { MaterialCreateOrConnectWithoutNutritionMatrixInput } from "../../material/inputs/MaterialCreateOrConnectWithoutNutritionMatrixInput.input";
import { MaterialCreateWithoutNutritionMatrixInput } from "../../material/inputs/MaterialCreateWithoutNutritionMatrixInput.input";
import { MaterialWhereUniqueInput } from "../../material/inputs/MaterialWhereUniqueInput.input";

@NestJsGraphQL.InputType('MaterialCreateNestedOneWithoutNutritionMatrixInput', { isAbstract: true })
export class MaterialCreateNestedOneWithoutNutritionMatrixInput {
  @NestJsGraphQL.Field(() => MaterialCreateWithoutNutritionMatrixInput, { nullable: true })
  create?: MaterialCreateWithoutNutritionMatrixInput | undefined;

  @NestJsGraphQL.Field(() => MaterialCreateOrConnectWithoutNutritionMatrixInput, { nullable: true })
  connectOrCreate?: MaterialCreateOrConnectWithoutNutritionMatrixInput | undefined;

  @NestJsGraphQL.Field(() => MaterialWhereUniqueInput, { nullable: true })
  connect?: MaterialWhereUniqueInput | undefined;
}
