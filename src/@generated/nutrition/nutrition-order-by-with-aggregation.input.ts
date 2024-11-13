import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { NutritionCountOrderByAggregateInput } from './nutrition-count-order-by-aggregate.input';
import { NutritionAvgOrderByAggregateInput } from './nutrition-avg-order-by-aggregate.input';
import { NutritionMaxOrderByAggregateInput } from './nutrition-max-order-by-aggregate.input';
import { NutritionMinOrderByAggregateInput } from './nutrition-min-order-by-aggregate.input';
import { NutritionSumOrderByAggregateInput } from './nutrition-sum-order-by-aggregate.input';

@InputType()
export class NutritionOrderByWithAggregationInput {
	@Field(() => SortOrder, { nullable: true })
	id?: keyof typeof SortOrder;

	@Field(() => SortOrder, { nullable: true })
	code?: keyof typeof SortOrder;

	@Field(() => SortOrder, { nullable: true })
	name?: keyof typeof SortOrder;

	@Field(() => SortOrder, { nullable: true })
	createdAt?: keyof typeof SortOrder;

	@Field(() => SortOrder, { nullable: true })
	updatedAt?: keyof typeof SortOrder;

	@Field(() => NutritionCountOrderByAggregateInput, { nullable: true })
	_count?: NutritionCountOrderByAggregateInput;

	@Field(() => NutritionAvgOrderByAggregateInput, { nullable: true })
	_avg?: NutritionAvgOrderByAggregateInput;

	@Field(() => NutritionMaxOrderByAggregateInput, { nullable: true })
	_max?: NutritionMaxOrderByAggregateInput;

	@Field(() => NutritionMinOrderByAggregateInput, { nullable: true })
	_min?: NutritionMinOrderByAggregateInput;

	@Field(() => NutritionSumOrderByAggregateInput, { nullable: true })
	_sum?: NutritionSumOrderByAggregateInput;
}
