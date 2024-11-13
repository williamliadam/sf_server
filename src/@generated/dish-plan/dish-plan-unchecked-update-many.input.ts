import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class DishPlanUncheckedUpdateManyInput {
	@Field(() => IntFieldUpdateOperationsInput, { nullable: true })
	id?: IntFieldUpdateOperationsInput;

	@Field(() => IntFieldUpdateOperationsInput, { nullable: true })
	recipeId?: IntFieldUpdateOperationsInput;

	@Field(() => IntFieldUpdateOperationsInput, { nullable: true })
	amount?: IntFieldUpdateOperationsInput;

	@Field(() => IntFieldUpdateOperationsInput, { nullable: true })
	planCookerId?: IntFieldUpdateOperationsInput;

	@Field(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
	mealPlanId?: NullableIntFieldUpdateOperationsInput;

	@Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
	createdAt?: DateTimeFieldUpdateOperationsInput;

	@Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
	updatedAt?: DateTimeFieldUpdateOperationsInput;
}
