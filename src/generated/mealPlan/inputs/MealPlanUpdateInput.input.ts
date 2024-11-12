import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeFieldUpdateOperationsInput } from "../../common/inputs/DateTimeFieldUpdateOperationsInput.input";
import { EnumMealTypeFieldUpdateOperationsInput } from "../../common/inputs/EnumMealTypeFieldUpdateOperationsInput.input";
import { NullableDateTimeFieldUpdateOperationsInput } from "../../common/inputs/NullableDateTimeFieldUpdateOperationsInput.input";
import { DishPlanUpdateManyWithoutUsedMealPlanNestedInput } from "../../dishPlan/inputs/DishPlanUpdateManyWithoutUsedMealPlanNestedInput.input";
import { UserUpdateOneRequiredWithoutMyMealPlansNestedInput } from "../../user/inputs/UserUpdateOneRequiredWithoutMyMealPlansNestedInput.input";

@NestJsGraphQL.InputType('MealPlanUpdateInput', { isAbstract: true })
export class MealPlanUpdateInput {
  @NestJsGraphQL.Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  planTime?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => EnumMealTypeFieldUpdateOperationsInput, { nullable: true })
  type?: EnumMealTypeFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => DishPlanUpdateManyWithoutUsedMealPlanNestedInput, { nullable: true })
  dishPlans?: DishPlanUpdateManyWithoutUsedMealPlanNestedInput | undefined;

  @NestJsGraphQL.Field(() => UserUpdateOneRequiredWithoutMyMealPlansNestedInput, { nullable: true })
  createBy?: UserUpdateOneRequiredWithoutMyMealPlansNestedInput | undefined;
}
