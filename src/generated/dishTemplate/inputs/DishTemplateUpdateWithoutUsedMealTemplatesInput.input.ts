import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeFieldUpdateOperationsInput } from "../../common/inputs/DateTimeFieldUpdateOperationsInput.input";
import { IntFieldUpdateOperationsInput } from "../../common/inputs/IntFieldUpdateOperationsInput.input";
import { RecipeUpdateOneRequiredWithoutUsedDishTemplatesNestedInput } from "../../recipe/inputs/RecipeUpdateOneRequiredWithoutUsedDishTemplatesNestedInput.input";

@NestJsGraphQL.InputType('DishTemplateUpdateWithoutUsedMealTemplatesInput', { isAbstract: true })
export class DishTemplateUpdateWithoutUsedMealTemplatesInput {
  @NestJsGraphQL.Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  amount?: IntFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => RecipeUpdateOneRequiredWithoutUsedDishTemplatesNestedInput, { nullable: true })
  recipe?: RecipeUpdateOneRequiredWithoutUsedDishTemplatesNestedInput | undefined;
}
