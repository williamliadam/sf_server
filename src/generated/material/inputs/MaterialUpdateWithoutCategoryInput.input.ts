import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeFieldUpdateOperationsInput } from "../../common/inputs/DateTimeFieldUpdateOperationsInput.input";
import { StringFieldUpdateOperationsInput } from "../../common/inputs/StringFieldUpdateOperationsInput.input";
import { IngredientUpdateManyWithoutMaterialNestedInput } from "../../ingredient/inputs/IngredientUpdateManyWithoutMaterialNestedInput.input";
import { NutritionRowUpdateManyWithoutBelongMaterialNestedInput } from "../../nutritionRow/inputs/NutritionRowUpdateManyWithoutBelongMaterialNestedInput.input";

@NestJsGraphQL.InputType('MaterialUpdateWithoutCategoryInput', { isAbstract: true })
export class MaterialUpdateWithoutCategoryInput {
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

  @NestJsGraphQL.Field(() => NutritionRowUpdateManyWithoutBelongMaterialNestedInput, { nullable: true })
  nutritionMatrix?: NutritionRowUpdateManyWithoutBelongMaterialNestedInput | undefined;

  @NestJsGraphQL.Field(() => IngredientUpdateManyWithoutMaterialNestedInput, { nullable: true })
  ingredients?: IngredientUpdateManyWithoutMaterialNestedInput | undefined;
}
