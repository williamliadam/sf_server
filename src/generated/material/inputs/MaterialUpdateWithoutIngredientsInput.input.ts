import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeFieldUpdateOperationsInput } from "../../common/inputs/DateTimeFieldUpdateOperationsInput.input";
import { StringFieldUpdateOperationsInput } from "../../common/inputs/StringFieldUpdateOperationsInput.input";
import { MateriaCategoryUpdateOneRequiredWithoutMaterialsNestedInput } from "../../materiaCategory/inputs/MateriaCategoryUpdateOneRequiredWithoutMaterialsNestedInput.input";
import { NutritionRowUpdateManyWithoutBelongMaterialNestedInput } from "../../nutritionRow/inputs/NutritionRowUpdateManyWithoutBelongMaterialNestedInput.input";

@NestJsGraphQL.InputType('MaterialUpdateWithoutIngredientsInput', { isAbstract: true })
export class MaterialUpdateWithoutIngredientsInput {
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

  @NestJsGraphQL.Field(() => NutritionRowUpdateManyWithoutBelongMaterialNestedInput, { nullable: true })
  nutritionMatrix?: NutritionRowUpdateManyWithoutBelongMaterialNestedInput | undefined;
}
