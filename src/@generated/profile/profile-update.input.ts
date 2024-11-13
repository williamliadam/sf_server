import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumGoalFieldUpdateOperationsInput } from '../prisma/enum-goal-field-update-operations.input';
import { UserUpdateOneRequiredWithoutProfileNestedInput } from '../user/user-update-one-required-without-profile-nested.input';

@InputType()
export class ProfileUpdateInput {
	@Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
	avatar?: NullableStringFieldUpdateOperationsInput;

	@Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
	nickName?: NullableStringFieldUpdateOperationsInput;

	@Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
	createdAt?: DateTimeFieldUpdateOperationsInput;

	@Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
	updatedAt?: DateTimeFieldUpdateOperationsInput;

	@Field(() => EnumGoalFieldUpdateOperationsInput, { nullable: true })
	goal?: EnumGoalFieldUpdateOperationsInput;

	@Field(() => UserUpdateOneRequiredWithoutProfileNestedInput, {
		nullable: true,
	})
	user?: UserUpdateOneRequiredWithoutProfileNestedInput;
}
