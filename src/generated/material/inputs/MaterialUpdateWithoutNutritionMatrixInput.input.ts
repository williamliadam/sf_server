import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeFieldUpdateOperationsInput } from "../../common/inputs/DateTimeFieldUpdateOperationsInput.input";
import { StringFieldUpdateOperationsInput } from "../../common/inputs/StringFieldUpdateOperationsInput.input";
import { IngredientUpdateManyWithoutMaterialNestedInput } from "../../ingredient/inputs/IngredientUpdateManyWithoutMaterialNestedInput.input";
import { MateriaCategoryUpdateOneRequiredWithoutMaterialsNestedInput } from "../../materiaCategory/inputs/MateriaCategoryUpdateOneRequiredWithoutMaterialsNestedInput.input";

@NestJsGraphQL.InputType('MaterialUpdateWithoutNutritionMatrixInput', { isAbstract: true })
export class MaterialUpdateWithoutNutritionMatrixInput {
  @NestJsGraphQL.Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  code?: StringFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  nickName?: StringFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => MateriaCategoryUpdateOneRequiredWithoutMaterialsNestedInput, { nullable: true })
  category?: MateriaCategoryUpdateOneRequiredWithoutMaterialsNestedInput | undefined;

  @NestJsGraphQL.Field(() => IngredientUpdateManyWithoutMaterialNestedInput, { nullable: true })
  ingredients?: IngredientUpdateManyWithoutMaterialNestedInput | undefined;
}
