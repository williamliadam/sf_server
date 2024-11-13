import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class BodyDetailUpdateWithoutUserInput {
	@Field(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
	weight?: NullableIntFieldUpdateOperationsInput;

	@Field(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
	height?: NullableIntFieldUpdateOperationsInput;

	@Field(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
	age?: NullableIntFieldUpdateOperationsInput;

	@Field(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
	bmi?: NullableIntFieldUpdateOperationsInput;

	@Field(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
	bmr?: NullableIntFieldUpdateOperationsInput;

	@Field(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
	tdee?: NullableIntFieldUpdateOperationsInput;

	@Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
	createdAt?: DateTimeFieldUpdateOperationsInput;

	@Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
	updatedAt?: DateTimeFieldUpdateOperationsInput;
}
