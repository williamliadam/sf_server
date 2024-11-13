import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { DishTemplateUpdateManyWithoutUsedMealTemplatesNestedInput } from '../dish-template/dish-template-update-many-without-used-meal-templates-nested.input';

@InputType()
export class MealTemplateUpdateWithoutCreateByInput {
	@Field(() => StringFieldUpdateOperationsInput, { nullable: true })
	name?: StringFieldUpdateOperationsInput;

	@Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
	createdAt?: DateTimeFieldUpdateOperationsInput;

	@Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
	updatedAt?: DateTimeFieldUpdateOperationsInput;

	@Field(() => DishTemplateUpdateManyWithoutUsedMealTemplatesNestedInput, {
		nullable: true,
	})
	dishTemplates?: DishTemplateUpdateManyWithoutUsedMealTemplatesNestedInput;
}
