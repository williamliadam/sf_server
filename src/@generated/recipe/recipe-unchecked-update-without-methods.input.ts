import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { IngredientUncheckedUpdateManyWithoutUsedRecipeNestedInput } from '../ingredient/ingredient-unchecked-update-many-without-used-recipe-nested.input';
import { DishPlanUncheckedUpdateManyWithoutRecipeNestedInput } from '../dish-plan/dish-plan-unchecked-update-many-without-recipe-nested.input';
import { DishTemplateUncheckedUpdateManyWithoutRecipeNestedInput } from '../dish-template/dish-template-unchecked-update-many-without-recipe-nested.input';

@InputType()
export class RecipeUncheckedUpdateWithoutMethodsInput {
	@Field(() => IntFieldUpdateOperationsInput, { nullable: true })
	id?: IntFieldUpdateOperationsInput;

	@Field(() => StringFieldUpdateOperationsInput, { nullable: true })
	name?: StringFieldUpdateOperationsInput;

	@Field(() => IntFieldUpdateOperationsInput, { nullable: true })
	stars?: IntFieldUpdateOperationsInput;

	@Field(() => IntFieldUpdateOperationsInput, { nullable: true })
	authorId?: IntFieldUpdateOperationsInput;

	@Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
	createdAt?: DateTimeFieldUpdateOperationsInput;

	@Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
	updatedAt?: DateTimeFieldUpdateOperationsInput;

	@Field(() => IngredientUncheckedUpdateManyWithoutUsedRecipeNestedInput, {
		nullable: true,
	})
	ingredients?: IngredientUncheckedUpdateManyWithoutUsedRecipeNestedInput;

	@Field(() => DishPlanUncheckedUpdateManyWithoutRecipeNestedInput, {
		nullable: true,
	})
	usedDishPlans?: DishPlanUncheckedUpdateManyWithoutRecipeNestedInput;

	@Field(() => DishTemplateUncheckedUpdateManyWithoutRecipeNestedInput, {
		nullable: true,
	})
	usedDishTemplates?: DishTemplateUncheckedUpdateManyWithoutRecipeNestedInput;
}
