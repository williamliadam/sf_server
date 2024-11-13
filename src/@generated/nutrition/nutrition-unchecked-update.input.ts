import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NutritionRowUncheckedUpdateManyWithoutNutirtionNestedInput } from '../nutrition-row/nutrition-row-unchecked-update-many-without-nutirtion-nested.input';

@InputType()
export class NutritionUncheckedUpdateInput {
	@Field(() => IntFieldUpdateOperationsInput, { nullable: true })
	id?: IntFieldUpdateOperationsInput;

	@Field(() => StringFieldUpdateOperationsInput, { nullable: true })
	code?: StringFieldUpdateOperationsInput;

	@Field(() => StringFieldUpdateOperationsInput, { nullable: true })
	name?: StringFieldUpdateOperationsInput;

	@Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
	createdAt?: DateTimeFieldUpdateOperationsInput;

	@Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
	updatedAt?: DateTimeFieldUpdateOperationsInput;

	@Field(() => NutritionRowUncheckedUpdateManyWithoutNutirtionNestedInput, {
		nullable: true,
	})
	usedRow?: NutritionRowUncheckedUpdateManyWithoutNutirtionNestedInput;
}
