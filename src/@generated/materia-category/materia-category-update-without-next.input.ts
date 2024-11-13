import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { MaterialUpdateManyWithoutCategoryNestedInput } from '../material/material-update-many-without-category-nested.input';
import { MateriaCategoryUpdateOneWithoutNextNestedInput } from './materia-category-update-one-without-next-nested.input';

@InputType()
export class MateriaCategoryUpdateWithoutNextInput {
	@Field(() => StringFieldUpdateOperationsInput, { nullable: true })
	code?: StringFieldUpdateOperationsInput;

	@Field(() => StringFieldUpdateOperationsInput, { nullable: true })
	name?: StringFieldUpdateOperationsInput;

	@Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
	createdAt?: DateTimeFieldUpdateOperationsInput;

	@Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
	updatedAt?: DateTimeFieldUpdateOperationsInput;

	@Field(() => MaterialUpdateManyWithoutCategoryNestedInput, { nullable: true })
	materials?: MaterialUpdateManyWithoutCategoryNestedInput;

	@Field(() => MateriaCategoryUpdateOneWithoutNextNestedInput, {
		nullable: true,
	})
	last?: MateriaCategoryUpdateOneWithoutNextNestedInput;
}
