import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { IngredientOrderByRelationAggregateInput } from '../ingredient/ingredient-order-by-relation-aggregate.input';
import { MethodOrderByRelationAggregateInput } from '../method/method-order-by-relation-aggregate.input';
import { DishPlanOrderByRelationAggregateInput } from '../dish-plan/dish-plan-order-by-relation-aggregate.input';
import { DishTemplateOrderByRelationAggregateInput } from '../dish-template/dish-template-order-by-relation-aggregate.input';

@InputType()
export class RecipeOrderByWithRelationInput {
	@Field(() => SortOrder, { nullable: true })
	id?: keyof typeof SortOrder;

	@Field(() => SortOrder, { nullable: true })
	name?: keyof typeof SortOrder;

	@Field(() => SortOrder, { nullable: true })
	stars?: keyof typeof SortOrder;

	@Field(() => SortOrder, { nullable: true })
	authorId?: keyof typeof SortOrder;

	@Field(() => SortOrder, { nullable: true })
	createdAt?: keyof typeof SortOrder;

	@Field(() => SortOrder, { nullable: true })
	updatedAt?: keyof typeof SortOrder;

	@Field(() => UserOrderByWithRelationInput, { nullable: true })
	author?: UserOrderByWithRelationInput;

	@Field(() => IngredientOrderByRelationAggregateInput, { nullable: true })
	ingredients?: IngredientOrderByRelationAggregateInput;

	@Field(() => MethodOrderByRelationAggregateInput, { nullable: true })
	methods?: MethodOrderByRelationAggregateInput;

	@Field(() => DishPlanOrderByRelationAggregateInput, { nullable: true })
	usedDishPlans?: DishPlanOrderByRelationAggregateInput;

	@Field(() => DishTemplateOrderByRelationAggregateInput, { nullable: true })
	usedDishTemplates?: DishTemplateOrderByRelationAggregateInput;
}
