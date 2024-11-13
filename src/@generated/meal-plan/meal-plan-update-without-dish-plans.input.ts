import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumMealTypeFieldUpdateOperationsInput } from '../prisma/enum-meal-type-field-update-operations.input';
import { UserUpdateOneRequiredWithoutMyMealPlansNestedInput } from '../user/user-update-one-required-without-my-meal-plans-nested.input';

@InputType()
export class MealPlanUpdateWithoutDishPlansInput {
	@Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
	planTime?: NullableDateTimeFieldUpdateOperationsInput;

	@Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
	createdAt?: DateTimeFieldUpdateOperationsInput;

	@Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
	updatedAt?: DateTimeFieldUpdateOperationsInput;

	@Field(() => EnumMealTypeFieldUpdateOperationsInput, { nullable: true })
	type?: EnumMealTypeFieldUpdateOperationsInput;

	@Field(() => UserUpdateOneRequiredWithoutMyMealPlansNestedInput, {
		nullable: true,
	})
	createBy?: UserUpdateOneRequiredWithoutMyMealPlansNestedInput;
}
