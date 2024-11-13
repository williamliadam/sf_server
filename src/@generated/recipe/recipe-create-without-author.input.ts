import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { IngredientCreateNestedManyWithoutUsedRecipeInput } from '../ingredient/ingredient-create-nested-many-without-used-recipe.input';
import { MethodCreateNestedManyWithoutUsedRecipeInput } from '../method/method-create-nested-many-without-used-recipe.input';
import { DishPlanCreateNestedManyWithoutRecipeInput } from '../dish-plan/dish-plan-create-nested-many-without-recipe.input';
import { DishTemplateCreateNestedManyWithoutRecipeInput } from '../dish-template/dish-template-create-nested-many-without-recipe.input';

@InputType()
export class RecipeCreateWithoutAuthorInput {
	@Field(() => String, { nullable: false })
	name!: string;

	@Field(() => Int, { nullable: false })
	stars!: number;

	@Field(() => Date, { nullable: true })
	createdAt?: Date | string;

	@Field(() => Date, { nullable: true })
	updatedAt?: Date | string;

	@Field(() => IngredientCreateNestedManyWithoutUsedRecipeInput, {
		nullable: true,
	})
	ingredients?: IngredientCreateNestedManyWithoutUsedRecipeInput;

	@Field(() => MethodCreateNestedManyWithoutUsedRecipeInput, { nullable: true })
	methods?: MethodCreateNestedManyWithoutUsedRecipeInput;

	@Field(() => DishPlanCreateNestedManyWithoutRecipeInput, { nullable: true })
	usedDishPlans?: DishPlanCreateNestedManyWithoutRecipeInput;

	@Field(() => DishTemplateCreateNestedManyWithoutRecipeInput, {
		nullable: true,
	})
	usedDishTemplates?: DishTemplateCreateNestedManyWithoutRecipeInput;
}
