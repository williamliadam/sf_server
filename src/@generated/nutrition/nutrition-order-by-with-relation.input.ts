import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { NutritionRowOrderByRelationAggregateInput } from '../nutrition-row/nutrition-row-order-by-relation-aggregate.input';

@InputType()
export class NutritionOrderByWithRelationInput {
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

	@Field(() => NutritionRowOrderByRelationAggregateInput, { nullable: true })
	usedRow?: NutritionRowOrderByRelationAggregateInput;
}
