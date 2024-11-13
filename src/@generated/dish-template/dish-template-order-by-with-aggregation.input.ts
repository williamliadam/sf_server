import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DishTemplateCountOrderByAggregateInput } from './dish-template-count-order-by-aggregate.input';
import { DishTemplateAvgOrderByAggregateInput } from './dish-template-avg-order-by-aggregate.input';
import { DishTemplateMaxOrderByAggregateInput } from './dish-template-max-order-by-aggregate.input';
import { DishTemplateMinOrderByAggregateInput } from './dish-template-min-order-by-aggregate.input';
import { DishTemplateSumOrderByAggregateInput } from './dish-template-sum-order-by-aggregate.input';

@InputType()
export class DishTemplateOrderByWithAggregationInput {
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

	@Field(() => DishTemplateCountOrderByAggregateInput, { nullable: true })
	_count?: DishTemplateCountOrderByAggregateInput;

	@Field(() => DishTemplateAvgOrderByAggregateInput, { nullable: true })
	_avg?: DishTemplateAvgOrderByAggregateInput;

	@Field(() => DishTemplateMaxOrderByAggregateInput, { nullable: true })
	_max?: DishTemplateMaxOrderByAggregateInput;

	@Field(() => DishTemplateMinOrderByAggregateInput, { nullable: true })
	_min?: DishTemplateMinOrderByAggregateInput;

	@Field(() => DishTemplateSumOrderByAggregateInput, { nullable: true })
	_sum?: DishTemplateSumOrderByAggregateInput;
}
