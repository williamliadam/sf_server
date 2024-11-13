import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { RecipeUpdateOneRequiredWithoutUsedDishPlansNestedInput } from '../recipe/recipe-update-one-required-without-used-dish-plans-nested.input';
import { MealPlanUpdateOneWithoutDishPlansNestedInput } from '../meal-plan/meal-plan-update-one-without-dish-plans-nested.input';

@InputType()
export class DishPlanUpdateWithoutPlanCookerInput {
	@Field(() => IntFieldUpdateOperationsInput, { nullable: true })
	amount?: IntFieldUpdateOperationsInput;

	@Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
	createdAt?: DateTimeFieldUpdateOperationsInput;

	@Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
	updatedAt?: DateTimeFieldUpdateOperationsInput;

	@Field(() => RecipeUpdateOneRequiredWithoutUsedDishPlansNestedInput, {
		nullable: true,
	})
	recipe?: RecipeUpdateOneRequiredWithoutUsedDishPlansNestedInput;

	@Field(() => MealPlanUpdateOneWithoutDishPlansNestedInput, { nullable: true })
	usedMealPlan?: MealPlanUpdateOneWithoutDishPlansNestedInput;
}
