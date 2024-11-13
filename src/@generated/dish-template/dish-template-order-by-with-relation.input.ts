import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { MealTemplateOrderByWithRelationInput } from '../meal-template/meal-template-order-by-with-relation.input';
import { RecipeOrderByWithRelationInput } from '../recipe/recipe-order-by-with-relation.input';

@InputType()
export class DishTemplateOrderByWithRelationInput {
	@Field(() => SortOrder, { nullable: true })
	id?: keyof typeof SortOrder;

	@Field(() => SortOrder, { nullable: true })
	recipeId?: keyof typeof SortOrder;

	@Field(() => SortOrder, { nullable: true })
	amount?: keyof typeof SortOrder;

	@Field(() => SortOrder, { nullable: true })
	createdAt?: keyof typeof SortOrder;

	@Field(() => SortOrder, { nullable: true })
	updatedAt?: keyof typeof SortOrder;

	@Field(() => SortOrderInput, { nullable: true })
	mealTemplateId?: SortOrderInput;

	@Field(() => MealTemplateOrderByWithRelationInput, { nullable: true })
	usedMealTemplates?: MealTemplateOrderByWithRelationInput;

	@Field(() => RecipeOrderByWithRelationInput, { nullable: true })
	recipe?: RecipeOrderByWithRelationInput;
}
