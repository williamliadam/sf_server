import * as NestJsGraphQL from "@nestjs/graphql";
import { DishPlanUpdateManyWithoutUsedMealPlanNestedInput } from "../../dishPlan/inputs/DishPlanUpdateManyWithoutUsedMealPlanNestedInput.input";
import { DateTimeFieldUpdateOperationsInput } from "./DateTimeFieldUpdateOperationsInput.input";
import { EnumMealTypeFieldUpdateOperationsInput } from "./EnumMealTypeFieldUpdateOperationsInput.input";
import { NullableDateTimeFieldUpdateOperationsInput } from "./NullableDateTimeFieldUpdateOperationsInput.input";

@NestJsGraphQL.InputType('MealPlanUpdateWithoutCreateByInput', { isAbstract: true })
export class MealPlanUpdateWithoutCreateByInput {
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
}
