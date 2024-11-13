import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MealTemplateCountOrderByAggregateInput } from './meal-template-count-order-by-aggregate.input';
import { MealTemplateAvgOrderByAggregateInput } from './meal-template-avg-order-by-aggregate.input';
import { MealTemplateMaxOrderByAggregateInput } from './meal-template-max-order-by-aggregate.input';
import { MealTemplateMinOrderByAggregateInput } from './meal-template-min-order-by-aggregate.input';
import { MealTemplateSumOrderByAggregateInput } from './meal-template-sum-order-by-aggregate.input';

@InputType()
export class MealTemplateOrderByWithAggregationInput {
	@Field(() => SortOrder, { nullable: true })
	id?: keyof typeof SortOrder;

	@Field(() => SortOrder, { nullable: true })
	name?: keyof typeof SortOrder;

	@Field(() => SortOrder, { nullable: true })
	userId?: keyof typeof SortOrder;

	@Field(() => SortOrder, { nullable: true })
	createdAt?: keyof typeof SortOrder;

	@Field(() => SortOrder, { nullable: true })
	updatedAt?: keyof typeof SortOrder;

	@Field(() => MealTemplateCountOrderByAggregateInput, { nullable: true })
	_count?: MealTemplateCountOrderByAggregateInput;

	@Field(() => MealTemplateAvgOrderByAggregateInput, { nullable: true })
	_avg?: MealTemplateAvgOrderByAggregateInput;

	@Field(() => MealTemplateMaxOrderByAggregateInput, { nullable: true })
	_max?: MealTemplateMaxOrderByAggregateInput;

	@Field(() => MealTemplateMinOrderByAggregateInput, { nullable: true })
	_min?: MealTemplateMinOrderByAggregateInput;

	@Field(() => MealTemplateSumOrderByAggregateInput, { nullable: true })
	_sum?: MealTemplateSumOrderByAggregateInput;
}
