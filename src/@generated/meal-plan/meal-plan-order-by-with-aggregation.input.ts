import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { MealPlanCountOrderByAggregateInput } from './meal-plan-count-order-by-aggregate.input';
import { MealPlanAvgOrderByAggregateInput } from './meal-plan-avg-order-by-aggregate.input';
import { MealPlanMaxOrderByAggregateInput } from './meal-plan-max-order-by-aggregate.input';
import { MealPlanMinOrderByAggregateInput } from './meal-plan-min-order-by-aggregate.input';
import { MealPlanSumOrderByAggregateInput } from './meal-plan-sum-order-by-aggregate.input';

@InputType()
export class MealPlanOrderByWithAggregationInput {
	@Field(() => SortOrder, { nullable: true })
	id?: keyof typeof SortOrder;

	@Field(() => SortOrderInput, { nullable: true })
	planTime?: SortOrderInput;

	@Field(() => SortOrder, { nullable: true })
	userId?: keyof typeof SortOrder;

	@Field(() => SortOrder, { nullable: true })
	createdAt?: keyof typeof SortOrder;

	@Field(() => SortOrder, { nullable: true })
	updatedAt?: keyof typeof SortOrder;

	@Field(() => SortOrder, { nullable: true })
	type?: keyof typeof SortOrder;

	@Field(() => MealPlanCountOrderByAggregateInput, { nullable: true })
	_count?: MealPlanCountOrderByAggregateInput;

	@Field(() => MealPlanAvgOrderByAggregateInput, { nullable: true })
	_avg?: MealPlanAvgOrderByAggregateInput;

	@Field(() => MealPlanMaxOrderByAggregateInput, { nullable: true })
	_max?: MealPlanMaxOrderByAggregateInput;

	@Field(() => MealPlanMinOrderByAggregateInput, { nullable: true })
	_min?: MealPlanMinOrderByAggregateInput;

	@Field(() => MealPlanSumOrderByAggregateInput, { nullable: true })
	_sum?: MealPlanSumOrderByAggregateInput;
}
