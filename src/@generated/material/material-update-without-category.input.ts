import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NutritionRowUpdateManyWithoutBelongMaterialNestedInput } from '../nutrition-row/nutrition-row-update-many-without-belong-material-nested.input';
import { IngredientUpdateManyWithoutMaterialNestedInput } from '../ingredient/ingredient-update-many-without-material-nested.input';

@InputType()
export class MaterialUpdateWithoutCategoryInput {
	@Field(() => StringFieldUpdateOperationsInput, { nullable: true })
	name?: StringFieldUpdateOperationsInput;

	@Field(() => StringFieldUpdateOperationsInput, { nullable: true })
	code?: StringFieldUpdateOperationsInput;

	@Field(() => StringFieldUpdateOperationsInput, { nullable: true })
	nickName?: StringFieldUpdateOperationsInput;

	@Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
	createdAt?: DateTimeFieldUpdateOperationsInput;

	@Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
	updatedAt?: DateTimeFieldUpdateOperationsInput;

	@Field(() => NutritionRowUpdateManyWithoutBelongMaterialNestedInput, {
		nullable: true,
	})
	nutritionMatrix?: NutritionRowUpdateManyWithoutBelongMaterialNestedInput;

	@Field(() => IngredientUpdateManyWithoutMaterialNestedInput, {
		nullable: true,
	})
	ingredients?: IngredientUpdateManyWithoutMaterialNestedInput;
}
