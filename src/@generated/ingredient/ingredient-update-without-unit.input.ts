import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { MaterialUpdateOneRequiredWithoutIngredientsNestedInput } from '../material/material-update-one-required-without-ingredients-nested.input';
import { RecipeUpdateOneWithoutIngredientsNestedInput } from '../recipe/recipe-update-one-without-ingredients-nested.input';

@InputType()
export class IngredientUpdateWithoutUnitInput {
	@Field(() => IntFieldUpdateOperationsInput, { nullable: true })
	amount?: IntFieldUpdateOperationsInput;

	@Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
	createdAt?: DateTimeFieldUpdateOperationsInput;

	@Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
	updatedAt?: DateTimeFieldUpdateOperationsInput;

	@Field(() => MaterialUpdateOneRequiredWithoutIngredientsNestedInput, {
		nullable: true,
	})
	material?: MaterialUpdateOneRequiredWithoutIngredientsNestedInput;

	@Field(() => RecipeUpdateOneWithoutIngredientsNestedInput, { nullable: true })
	usedRecipe?: RecipeUpdateOneWithoutIngredientsNestedInput;
}
