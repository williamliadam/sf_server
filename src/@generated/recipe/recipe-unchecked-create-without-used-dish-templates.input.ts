import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { IngredientUncheckedCreateNestedManyWithoutUsedRecipeInput } from '../ingredient/ingredient-unchecked-create-nested-many-without-used-recipe.input';
import { MethodUncheckedCreateNestedManyWithoutUsedRecipeInput } from '../method/method-unchecked-create-nested-many-without-used-recipe.input';
import { DishPlanUncheckedCreateNestedManyWithoutRecipeInput } from '../dish-plan/dish-plan-unchecked-create-nested-many-without-recipe.input';

@InputType()
export class RecipeUncheckedCreateWithoutUsedDishTemplatesInput {
	@Field(() => Int, { nullable: true })
	id?: number;

	@Field(() => String, { nullable: false })
	name!: string;

	@Field(() => Int, { nullable: false })
	stars!: number;

	@Field(() => Int, { nullable: false })
	authorId!: number;

	@Field(() => Date, { nullable: true })
	createdAt?: Date | string;

	@Field(() => Date, { nullable: true })
	updatedAt?: Date | string;

	@Field(() => IngredientUncheckedCreateNestedManyWithoutUsedRecipeInput, {
		nullable: true,
	})
	ingredients?: IngredientUncheckedCreateNestedManyWithoutUsedRecipeInput;

	@Field(() => MethodUncheckedCreateNestedManyWithoutUsedRecipeInput, {
		nullable: true,
	})
	methods?: MethodUncheckedCreateNestedManyWithoutUsedRecipeInput;

	@Field(() => DishPlanUncheckedCreateNestedManyWithoutRecipeInput, {
		nullable: true,
	})
	usedDishPlans?: DishPlanUncheckedCreateNestedManyWithoutRecipeInput;
}
