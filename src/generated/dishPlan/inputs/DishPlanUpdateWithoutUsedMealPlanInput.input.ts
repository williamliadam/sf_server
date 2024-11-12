import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeFieldUpdateOperationsInput } from "../../common/inputs/DateTimeFieldUpdateOperationsInput.input";
import { IntFieldUpdateOperationsInput } from "../../common/inputs/IntFieldUpdateOperationsInput.input";
import { RecipeUpdateOneRequiredWithoutUsedDishPlansNestedInput } from "../../recipe/inputs/RecipeUpdateOneRequiredWithoutUsedDishPlansNestedInput.input";
import { UserUpdateOneRequiredWithoutChargeDishPlansNestedInput } from "../../user/inputs/UserUpdateOneRequiredWithoutChargeDishPlansNestedInput.input";

@NestJsGraphQL.InputType('DishPlanUpdateWithoutUsedMealPlanInput', { isAbstract: true })
export class DishPlanUpdateWithoutUsedMealPlanInput {
  @NestJsGraphQL.Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  amount?: IntFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => UserUpdateOneRequiredWithoutChargeDishPlansNestedInput, { nullable: true })
  planCooker?: UserUpdateOneRequiredWithoutChargeDishPlansNestedInput | undefined;

  @NestJsGraphQL.Field(() => RecipeUpdateOneRequiredWithoutUsedDishPlansNestedInput, { nullable: true })
  recipe?: RecipeUpdateOneRequiredWithoutUsedDishPlansNestedInput | undefined;
}
