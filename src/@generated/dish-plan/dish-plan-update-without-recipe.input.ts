import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutChargeDishPlansNestedInput } from '../user/user-update-one-required-without-charge-dish-plans-nested.input';
import { MealPlanUpdateOneWithoutDishPlansNestedInput } from '../meal-plan/meal-plan-update-one-without-dish-plans-nested.input';

@InputType()
export class DishPlanUpdateWithoutRecipeInput {
	@Field(() => IntFieldUpdateOperationsInput, { nullable: true })
	amount?: IntFieldUpdateOperationsInput;

	@Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
	createdAt?: DateTimeFieldUpdateOperationsInput;

	@Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
	updatedAt?: DateTimeFieldUpdateOperationsInput;

	@Field(() => UserUpdateOneRequiredWithoutChargeDishPlansNestedInput, {
		nullable: true,
	})
	planCooker?: UserUpdateOneRequiredWithoutChargeDishPlansNestedInput;

	@Field(() => MealPlanUpdateOneWithoutDishPlansNestedInput, { nullable: true })
	usedMealPlan?: MealPlanUpdateOneWithoutDishPlansNestedInput;
}
