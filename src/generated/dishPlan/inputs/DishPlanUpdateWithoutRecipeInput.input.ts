import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeFieldUpdateOperationsInput } from "../../common/inputs/DateTimeFieldUpdateOperationsInput.input";
import { IntFieldUpdateOperationsInput } from "../../common/inputs/IntFieldUpdateOperationsInput.input";
import { MealPlanUpdateOneWithoutDishPlansNestedInput } from "../../mealPlan/inputs/MealPlanUpdateOneWithoutDishPlansNestedInput.input";
import { UserUpdateOneRequiredWithoutChargeDishPlansNestedInput } from "../../user/inputs/UserUpdateOneRequiredWithoutChargeDishPlansNestedInput.input";

@NestJsGraphQL.InputType('DishPlanUpdateWithoutRecipeInput', { isAbstract: true })
export class DishPlanUpdateWithoutRecipeInput {
  @NestJsGraphQL.Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  amount?: IntFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => UserUpdateOneRequiredWithoutChargeDishPlansNestedInput, { nullable: true })
  planCooker?: UserUpdateOneRequiredWithoutChargeDishPlansNestedInput | undefined;

  @NestJsGraphQL.Field(() => MealPlanUpdateOneWithoutDishPlansNestedInput, { nullable: true })
  usedMealPlan?: MealPlanUpdateOneWithoutDishPlansNestedInput | undefined;
}
