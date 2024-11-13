import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { DishTemplateUncheckedUpdateManyWithoutUsedMealTemplatesNestedInput } from '../dish-template/dish-template-unchecked-update-many-without-used-meal-templates-nested.input';

@InputType()
export class MealTemplateUncheckedUpdateInput {
	@Field(() => IntFieldUpdateOperationsInput, { nullable: true })
	id?: IntFieldUpdateOperationsInput;

	@Field(() => StringFieldUpdateOperationsInput, { nullable: true })
	name?: StringFieldUpdateOperationsInput;

	@Field(() => IntFieldUpdateOperationsInput, { nullable: true })
	userId?: IntFieldUpdateOperationsInput;

	@Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
	createdAt?: DateTimeFieldUpdateOperationsInput;

	@Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
	updatedAt?: DateTimeFieldUpdateOperationsInput;

	@Field(
		() => DishTemplateUncheckedUpdateManyWithoutUsedMealTemplatesNestedInput,
		{ nullable: true },
	)
	dishTemplates?: DishTemplateUncheckedUpdateManyWithoutUsedMealTemplatesNestedInput;
}
