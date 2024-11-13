import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { MaterialUncheckedUpdateManyWithoutCategoryNestedInput } from '../material/material-unchecked-update-many-without-category-nested.input';
import { MateriaCategoryUncheckedUpdateManyWithoutLastNestedInput } from './materia-category-unchecked-update-many-without-last-nested.input';

@InputType()
export class MateriaCategoryUncheckedUpdateWithoutLastInput {
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

	@Field(() => MaterialUncheckedUpdateManyWithoutCategoryNestedInput, {
		nullable: true,
	})
	materials?: MaterialUncheckedUpdateManyWithoutCategoryNestedInput;

	@Field(() => MateriaCategoryUncheckedUpdateManyWithoutLastNestedInput, {
		nullable: true,
	})
	next?: MateriaCategoryUncheckedUpdateManyWithoutLastNestedInput;
}
