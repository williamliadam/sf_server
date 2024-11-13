import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { IngredientUpdateManyWithoutUsedRecipeNestedInput } from '../ingredient/ingredient-update-many-without-used-recipe-nested.input';
import { MethodUpdateManyWithoutUsedRecipeNestedInput } from '../method/method-update-many-without-used-recipe-nested.input';
import { DishPlanUpdateManyWithoutRecipeNestedInput } from '../dish-plan/dish-plan-update-many-without-recipe-nested.input';
import { DishTemplateUpdateManyWithoutRecipeNestedInput } from '../dish-template/dish-template-update-many-without-recipe-nested.input';

@InputType()
export class RecipeUpdateWithoutAuthorInput {
	@Field(() => StringFieldUpdateOperationsInput, { nullable: true })
	name?: StringFieldUpdateOperationsInput;

	@Field(() => IntFieldUpdateOperationsInput, { nullable: true })
	stars?: IntFieldUpdateOperationsInput;

	@Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
	createdAt?: DateTimeFieldUpdateOperationsInput;

	@Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
	updatedAt?: DateTimeFieldUpdateOperationsInput;

	@Field(() => IngredientUpdateManyWithoutUsedRecipeNestedInput, {
		nullable: true,
	})
	ingredients?: IngredientUpdateManyWithoutUsedRecipeNestedInput;

	@Field(() => MethodUpdateManyWithoutUsedRecipeNestedInput, { nullable: true })
	methods?: MethodUpdateManyWithoutUsedRecipeNestedInput;

	@Field(() => DishPlanUpdateManyWithoutRecipeNestedInput, { nullable: true })
	usedDishPlans?: DishPlanUpdateManyWithoutRecipeNestedInput;

	@Field(() => DishTemplateUpdateManyWithoutRecipeNestedInput, {
		nullable: true,
	})
	usedDishTemplates?: DishTemplateUpdateManyWithoutRecipeNestedInput;
}
