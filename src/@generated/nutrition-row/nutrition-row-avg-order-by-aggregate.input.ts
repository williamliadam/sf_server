import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class NutritionRowAvgOrderByAggregateInput {
	@Field(() => SortOrder, { nullable: true })
	id?: keyof typeof SortOrder;

	@Field(() => SortOrder, { nullable: true })
	nutirtionId?: keyof typeof SortOrder;

	@Field(() => SortOrder, { nullable: true })
	percent?: keyof typeof SortOrder;

	@Field(() => SortOrder, { nullable: true })
	belongToId?: keyof typeof SortOrder;
}
