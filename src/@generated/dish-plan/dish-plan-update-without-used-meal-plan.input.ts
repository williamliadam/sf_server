import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutChargeDishPlansNestedInput } from '../user/user-update-one-required-without-charge-dish-plans-nested.input';
import { RecipeUpdateOneRequiredWithoutUsedDishPlansNestedInput } from '../recipe/recipe-update-one-required-without-used-dish-plans-nested.input';

@InputType()
export class DishPlanUpdateWithoutUsedMealPlanInput {
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

	@Field(() => RecipeUpdateOneRequiredWithoutUsedDishPlansNestedInput, {
		nullable: true,
	})
	recipe?: RecipeUpdateOneRequiredWithoutUsedDishPlansNestedInput;
}
