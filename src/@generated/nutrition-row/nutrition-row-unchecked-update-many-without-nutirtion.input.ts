import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class NutritionRowUncheckedUpdateManyWithoutNutirtionInput {
	@Field(() => IntFieldUpdateOperationsInput, { nullable: true })
	id?: IntFieldUpdateOperationsInput;

	@Field(() => IntFieldUpdateOperationsInput, { nullable: true })
	percent?: IntFieldUpdateOperationsInput;

	@Field(() => IntFieldUpdateOperationsInput, { nullable: true })
	belongToId?: IntFieldUpdateOperationsInput;

	@Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
	createdAt?: DateTimeFieldUpdateOperationsInput;

	@Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
	updatedAt?: DateTimeFieldUpdateOperationsInput;
}
