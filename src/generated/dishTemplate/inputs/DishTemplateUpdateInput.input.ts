import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeFieldUpdateOperationsInput } from "../../common/inputs/DateTimeFieldUpdateOperationsInput.input";
import { IntFieldUpdateOperationsInput } from "../../common/inputs/IntFieldUpdateOperationsInput.input";
import { MealTemplateUpdateOneWithoutDishTemplatesNestedInput } from "../../mealTemplate/inputs/MealTemplateUpdateOneWithoutDishTemplatesNestedInput.input";
import { RecipeUpdateOneRequiredWithoutUsedDishTemplatesNestedInput } from "../../recipe/inputs/RecipeUpdateOneRequiredWithoutUsedDishTemplatesNestedInput.input";

@NestJsGraphQL.InputType('DishTemplateUpdateInput', { isAbstract: true })
export class DishTemplateUpdateInput {
  @NestJsGraphQL.Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  amount?: IntFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => MealTemplateUpdateOneWithoutDishTemplatesNestedInput, { nullable: true })
  usedMealTemplates?: MealTemplateUpdateOneWithoutDishTemplatesNestedInput | undefined;

  @NestJsGraphQL.Field(() => RecipeUpdateOneRequiredWithoutUsedDishTemplatesNestedInput, { nullable: true })
  recipe?: RecipeUpdateOneRequiredWithoutUsedDishTemplatesNestedInput | undefined;
}
