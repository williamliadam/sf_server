import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';

@InputType()
export class DishTemplateScalarWhereWithAggregatesInput {
	@Field(() => [DishTemplateScalarWhereWithAggregatesInput], { nullable: true })
	AND?: Array<DishTemplateScalarWhereWithAggregatesInput>;

	@Field(() => [DishTemplateScalarWhereWithAggregatesInput], { nullable: true })
	OR?: Array<DishTemplateScalarWhereWithAggregatesInput>;

	@Field(() => [DishTemplateScalarWhereWithAggregatesInput], { nullable: true })
	NOT?: Array<DishTemplateScalarWhereWithAggregatesInput>;

	@Field(() => IntWithAggregatesFilter, { nullable: true })
	id?: IntWithAggregatesFilter;

	@Field(() => IntWithAggregatesFilter, { nullable: true })
	recipeId?: IntWithAggregatesFilter;

	@Field(() => IntWithAggregatesFilter, { nullable: true })
	amount?: IntWithAggregatesFilter;

	@Field(() => DateTimeWithAggregatesFilter, { nullable: true })
	createdAt?: DateTimeWithAggregatesFilter;

	@Field(() => DateTimeWithAggregatesFilter, { nullable: true })
	updatedAt?: DateTimeWithAggregatesFilter;

	@Field(() => IntNullableWithAggregatesFilter, { nullable: true })
	mealTemplateId?: IntNullableWithAggregatesFilter;
}
