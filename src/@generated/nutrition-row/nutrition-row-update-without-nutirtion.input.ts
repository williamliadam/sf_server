import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { MaterialUpdateOneRequiredWithoutNutritionMatrixNestedInput } from '../material/material-update-one-required-without-nutrition-matrix-nested.input';

@InputType()
export class NutritionRowUpdateWithoutNutirtionInput {
	@Field(() => IntFieldUpdateOperationsInput, { nullable: true })
	percent?: IntFieldUpdateOperationsInput;

	@Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
	createdAt?: DateTimeFieldUpdateOperationsInput;

	@Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
	updatedAt?: DateTimeFieldUpdateOperationsInput;

	@Field(() => MaterialUpdateOneRequiredWithoutNutritionMatrixNestedInput, {
		nullable: true,
	})
	belongMaterial?: MaterialUpdateOneRequiredWithoutNutritionMatrixNestedInput;
}
