import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { MateriaCategoryUncheckedUpdateManyWithoutLastNestedInput } from './materia-category-unchecked-update-many-without-last-nested.input';

@InputType()
export class MateriaCategoryUncheckedUpdateWithoutMaterialsInput {
	@Field(() => IntFieldUpdateOperationsInput, { nullable: true })
	id?: IntFieldUpdateOperationsInput;

	@Field(() => StringFieldUpdateOperationsInput, { nullable: true })
	code?: StringFieldUpdateOperationsInput;

	@Field(() => StringFieldUpdateOperationsInput, { nullable: true })
	name?: StringFieldUpdateOperationsInput;

	@Field(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
	lastId?: NullableIntFieldUpdateOperationsInput;

	@Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
	createdAt?: DateTimeFieldUpdateOperationsInput;

	@Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
	updatedAt?: DateTimeFieldUpdateOperationsInput;

	@Field(() => MateriaCategoryUncheckedUpdateManyWithoutLastNestedInput, {
		nullable: true,
	})
	next?: MateriaCategoryUncheckedUpdateManyWithoutLastNestedInput;
}
