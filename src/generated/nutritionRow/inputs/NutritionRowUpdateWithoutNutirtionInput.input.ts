import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeFieldUpdateOperationsInput } from "../../common/inputs/DateTimeFieldUpdateOperationsInput.input";
import { IntFieldUpdateOperationsInput } from "../../common/inputs/IntFieldUpdateOperationsInput.input";
import { MaterialUpdateOneRequiredWithoutNutritionMatrixNestedInput } from "../../material/inputs/MaterialUpdateOneRequiredWithoutNutritionMatrixNestedInput.input";

@NestJsGraphQL.InputType('NutritionRowUpdateWithoutNutirtionInput', { isAbstract: true })
export class NutritionRowUpdateWithoutNutirtionInput {
  @NestJsGraphQL.Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  percent?: IntFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => MaterialUpdateOneRequiredWithoutNutritionMatrixNestedInput, { nullable: true })
  belongMaterial?: MaterialUpdateOneRequiredWithoutNutritionMatrixNestedInput | undefined;
}
