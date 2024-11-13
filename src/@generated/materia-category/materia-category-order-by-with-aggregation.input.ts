import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { MateriaCategoryCountOrderByAggregateInput } from './materia-category-count-order-by-aggregate.input';
import { MateriaCategoryAvgOrderByAggregateInput } from './materia-category-avg-order-by-aggregate.input';
import { MateriaCategoryMaxOrderByAggregateInput } from './materia-category-max-order-by-aggregate.input';
import { MateriaCategoryMinOrderByAggregateInput } from './materia-category-min-order-by-aggregate.input';
import { MateriaCategorySumOrderByAggregateInput } from './materia-category-sum-order-by-aggregate.input';

@InputType()
export class MateriaCategoryOrderByWithAggregationInput {
	@Field(() => SortOrder, { nullable: true })
	id?: keyof typeof SortOrder;

	@Field(() => SortOrder, { nullable: true })
	code?: keyof typeof SortOrder;

	@Field(() => SortOrder, { nullable: true })
	name?: keyof typeof SortOrder;

	@Field(() => SortOrderInput, { nullable: true })
	lastId?: SortOrderInput;

	@Field(() => SortOrder, { nullable: true })
	createdAt?: keyof typeof SortOrder;

	@Field(() => SortOrder, { nullable: true })
	updatedAt?: keyof typeof SortOrder;

	@Field(() => MateriaCategoryCountOrderByAggregateInput, { nullable: true })
	_count?: MateriaCategoryCountOrderByAggregateInput;

	@Field(() => MateriaCategoryAvgOrderByAggregateInput, { nullable: true })
	_avg?: MateriaCategoryAvgOrderByAggregateInput;

	@Field(() => MateriaCategoryMaxOrderByAggregateInput, { nullable: true })
	_max?: MateriaCategoryMaxOrderByAggregateInput;

	@Field(() => MateriaCategoryMinOrderByAggregateInput, { nullable: true })
	_min?: MateriaCategoryMinOrderByAggregateInput;

	@Field(() => MateriaCategorySumOrderByAggregateInput, { nullable: true })
	_sum?: MateriaCategorySumOrderByAggregateInput;
}
