import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NutritionRowUpdateManyWithoutNutirtionNestedInput } from '../nutrition-row/nutrition-row-update-many-without-nutirtion-nested.input';

@InputType()
export class NutritionUpdateInput {
	@Field(() => StringFieldUpdateOperationsInput, { nullable: true })
	code?: StringFieldUpdateOperationsInput;

	@Field(() => StringFieldUpdateOperationsInput, { nullable: true })
	name?: StringFieldUpdateOperationsInput;

	@Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
	createdAt?: DateTimeFieldUpdateOperationsInput;

	@Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
	updatedAt?: DateTimeFieldUpdateOperationsInput;

	@Field(() => NutritionRowUpdateManyWithoutNutirtionNestedInput, {
		nullable: true,
	})
	usedRow?: NutritionRowUpdateManyWithoutNutirtionNestedInput;
}
