import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { NutritionRowCountOrderByAggregateInput } from './nutrition-row-count-order-by-aggregate.input';
import { NutritionRowAvgOrderByAggregateInput } from './nutrition-row-avg-order-by-aggregate.input';
import { NutritionRowMaxOrderByAggregateInput } from './nutrition-row-max-order-by-aggregate.input';
import { NutritionRowMinOrderByAggregateInput } from './nutrition-row-min-order-by-aggregate.input';
import { NutritionRowSumOrderByAggregateInput } from './nutrition-row-sum-order-by-aggregate.input';

@InputType()
export class NutritionRowOrderByWithAggregationInput {
	@Field(() => SortOrder, { nullable: true })
	id?: keyof typeof SortOrder;

	@Field(() => SortOrder, { nullable: true })
	nutirtionId?: keyof typeof SortOrder;

	@Field(() => SortOrder, { nullable: true })
	percent?: keyof typeof SortOrder;

	@Field(() => SortOrder, { nullable: true })
	belongToId?: keyof typeof SortOrder;

	@Field(() => SortOrder, { nullable: true })
	createdAt?: keyof typeof SortOrder;

	@Field(() => SortOrder, { nullable: true })
	updatedAt?: keyof typeof SortOrder;

	@Field(() => NutritionRowCountOrderByAggregateInput, { nullable: true })
	_count?: NutritionRowCountOrderByAggregateInput;

	@Field(() => NutritionRowAvgOrderByAggregateInput, { nullable: true })
	_avg?: NutritionRowAvgOrderByAggregateInput;

	@Field(() => NutritionRowMaxOrderByAggregateInput, { nullable: true })
	_max?: NutritionRowMaxOrderByAggregateInput;

	@Field(() => NutritionRowMinOrderByAggregateInput, { nullable: true })
	_min?: NutritionRowMinOrderByAggregateInput;

	@Field(() => NutritionRowSumOrderByAggregateInput, { nullable: true })
	_sum?: NutritionRowSumOrderByAggregateInput;
}
