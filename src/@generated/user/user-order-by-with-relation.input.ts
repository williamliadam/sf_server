import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ProfileOrderByWithRelationInput } from '../profile/profile-order-by-with-relation.input';
import { BodyDetailOrderByWithRelationInput } from '../body-detail/body-detail-order-by-with-relation.input';
import { PostOrderByRelationAggregateInput } from '../post/post-order-by-relation-aggregate.input';
import { RecipeOrderByRelationAggregateInput } from '../recipe/recipe-order-by-relation-aggregate.input';
import { MealTemplateOrderByRelationAggregateInput } from '../meal-template/meal-template-order-by-relation-aggregate.input';
import { MealPlanOrderByRelationAggregateInput } from '../meal-plan/meal-plan-order-by-relation-aggregate.input';
import { DishPlanOrderByRelationAggregateInput } from '../dish-plan/dish-plan-order-by-relation-aggregate.input';

@InputType()
export class UserOrderByWithRelationInput {
	@Field(() => SortOrder, { nullable: true })
	id?: keyof typeof SortOrder;

	@Field(() => SortOrderInput, { nullable: true })
	email?: SortOrderInput;

	@Field(() => SortOrderInput, { nullable: true })
	name?: SortOrderInput;

	@Field(() => SortOrder, { nullable: true })
	password?: keyof typeof SortOrder;

	@Field(() => SortOrderInput, { nullable: true })
	phone?: SortOrderInput;

	@Field(() => SortOrderInput, { nullable: true })
	wxId?: SortOrderInput;

	@Field(() => SortOrder, { nullable: true })
	createdAt?: keyof typeof SortOrder;

	@Field(() => SortOrder, { nullable: true })
	updatedAt?: keyof typeof SortOrder;

	@Field(() => SortOrder, { nullable: true })
	role?: keyof typeof SortOrder;

	@Field(() => ProfileOrderByWithRelationInput, { nullable: true })
	profile?: ProfileOrderByWithRelationInput;

	@Field(() => BodyDetailOrderByWithRelationInput, { nullable: true })
	bodyDetail?: BodyDetailOrderByWithRelationInput;

	@Field(() => PostOrderByRelationAggregateInput, { nullable: true })
	myPosts?: PostOrderByRelationAggregateInput;

	@Field(() => RecipeOrderByRelationAggregateInput, { nullable: true })
	myRecipes?: RecipeOrderByRelationAggregateInput;

	@Field(() => MealTemplateOrderByRelationAggregateInput, { nullable: true })
	myMealTemplates?: MealTemplateOrderByRelationAggregateInput;

	@Field(() => MealPlanOrderByRelationAggregateInput, { nullable: true })
	myMealPlans?: MealPlanOrderByRelationAggregateInput;

	@Field(() => DishPlanOrderByRelationAggregateInput, { nullable: true })
	chargeDishPlans?: DishPlanOrderByRelationAggregateInput;
}
