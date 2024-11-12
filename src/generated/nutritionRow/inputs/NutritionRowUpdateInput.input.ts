import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeFieldUpdateOperationsInput } from "../../common/inputs/DateTimeFieldUpdateOperationsInput.input";
import { IntFieldUpdateOperationsInput } from "../../common/inputs/IntFieldUpdateOperationsInput.input";
import { MaterialUpdateOneRequiredWithoutNutritionMatrixNestedInput } from "../../material/inputs/MaterialUpdateOneRequiredWithoutNutritionMatrixNestedInput.input";
import { NutritionUpdateOneRequiredWithoutUsedRowNestedInput } from "../../nutrition/inputs/NutritionUpdateOneRequiredWithoutUsedRowNestedInput.input";

@NestJsGraphQL.InputType('NutritionRowUpdateInput', { isAbstract: true })
export class NutritionRowUpdateInput {
  @NestJsGraphQL.Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  percent?: IntFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => NutritionUpdateOneRequiredWithoutUsedRowNestedInput, { nullable: true })
  nutirtion?: NutritionUpdateOneRequiredWithoutUsedRowNestedInput | undefined;

  @NestJsGraphQL.Field(() => MaterialUpdateOneRequiredWithoutNutritionMatrixNestedInput, { nullable: true })
  belongMaterial?: MaterialUpdateOneRequiredWithoutNutritionMatrixNestedInput | undefined;
}
