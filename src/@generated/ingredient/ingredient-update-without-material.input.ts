import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { MateriaUnitUpdateOneRequiredWithoutIngredientsNestedInput } from '../materia-unit/materia-unit-update-one-required-without-ingredients-nested.input';
import { RecipeUpdateOneWithoutIngredientsNestedInput } from '../recipe/recipe-update-one-without-ingredients-nested.input';

@InputType()
export class IngredientUpdateWithoutMaterialInput {
	@Field(() => IntFieldUpdateOperationsInput, { nullable: true })
	amount?: IntFieldUpdateOperationsInput;

	@Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
	createdAt?: DateTimeFieldUpdateOperationsInput;

	@Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
	updatedAt?: DateTimeFieldUpdateOperationsInput;

	@Field(() => MateriaUnitUpdateOneRequiredWithoutIngredientsNestedInput, {
		nullable: true,
	})
	unit?: MateriaUnitUpdateOneRequiredWithoutIngredientsNestedInput;

	@Field(() => RecipeUpdateOneWithoutIngredientsNestedInput, { nullable: true })
	usedRecipe?: RecipeUpdateOneWithoutIngredientsNestedInput;
}
