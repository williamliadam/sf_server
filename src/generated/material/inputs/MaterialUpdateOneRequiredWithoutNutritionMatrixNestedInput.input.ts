import * as NestJsGraphQL from "@nestjs/graphql";
import { MaterialCreateOrConnectWithoutNutritionMatrixInput } from "../../material/inputs/MaterialCreateOrConnectWithoutNutritionMatrixInput.input";
import { MaterialCreateWithoutNutritionMatrixInput } from "../../material/inputs/MaterialCreateWithoutNutritionMatrixInput.input";
import { MaterialUpdateWithoutNutritionMatrixInput } from "../../material/inputs/MaterialUpdateWithoutNutritionMatrixInput.input";
import { MaterialUpsertWithoutNutritionMatrixInput } from "../../material/inputs/MaterialUpsertWithoutNutritionMatrixInput.input";
import { MaterialWhereUniqueInput } from "../../material/inputs/MaterialWhereUniqueInput.input";

@NestJsGraphQL.InputType('MaterialUpdateOneRequiredWithoutNutritionMatrixNestedInput', { isAbstract: true })
export class MaterialUpdateOneRequiredWithoutNutritionMatrixNestedInput {
  @NestJsGraphQL.Field(() => MaterialCreateWithoutNutritionMatrixInput, { nullable: true })
  create?: MaterialCreateWithoutNutritionMatrixInput | undefined;

  @NestJsGraphQL.Field(() => MaterialCreateOrConnectWithoutNutritionMatrixInput, { nullable: true })
  connectOrCreate?: MaterialCreateOrConnectWithoutNutritionMatrixInput | undefined;

  @NestJsGraphQL.Field(() => MaterialUpsertWithoutNutritionMatrixInput, { nullable: true })
  upsert?: MaterialUpsertWithoutNutritionMatrixInput | undefined;

  @NestJsGraphQL.Field(() => MaterialWhereUniqueInput, { nullable: true })
  connect?: MaterialWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => MaterialUpdateWithoutNutritionMatrixInput, { nullable: true })
  update?: MaterialUpdateWithoutNutritionMatrixInput | undefined;
}
