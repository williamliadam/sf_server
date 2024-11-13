import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MealTemplate } from '../meal-template/meal-template.model';
import { Recipe } from '../recipe/recipe.model';

@ObjectType()
export class DishTemplate {
	@Field(() => ID, { nullable: false })
	id!: number;

	@Field(() => Int, { nullable: false })
	recipeId!: number;

	@Field(() => Int, { nullable: false })
	amount!: number;

	@Field(() => Date, { nullable: false })
	createdAt!: Date;

	@Field(() => Date, { nullable: false })
	updatedAt!: Date;

	@Field(() => Int, { nullable: true })
	mealTemplateId!: number | null;

	@Field(() => MealTemplate, { nullable: true })
	usedMealTemplates?: MealTemplate | null;

	@Field(() => Recipe, { nullable: false })
	recipe?: Recipe;
}
