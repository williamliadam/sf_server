import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class NutritionScalarWhereWithAggregatesInput {
	@Field(() => [NutritionScalarWhereWithAggregatesInput], { nullable: true })
	AND?: Array<NutritionScalarWhereWithAggregatesInput>;

	@Field(() => [NutritionScalarWhereWithAggregatesInput], { nullable: true })
	OR?: Array<NutritionScalarWhereWithAggregatesInput>;

	@Field(() => [NutritionScalarWhereWithAggregatesInput], { nullable: true })
	NOT?: Array<NutritionScalarWhereWithAggregatesInput>;

	@Field(() => IntWithAggregatesFilter, { nullable: true })
	id?: IntWithAggregatesFilter;

	@Field(() => StringWithAggregatesFilter, { nullable: true })
	code?: StringWithAggregatesFilter;

	@Field(() => StringWithAggregatesFilter, { nullable: true })
	name?: StringWithAggregatesFilter;

	@Field(() => DateTimeWithAggregatesFilter, { nullable: true })
	createdAt?: DateTimeWithAggregatesFilter;

	@Field(() => DateTimeWithAggregatesFilter, { nullable: true })
	updatedAt?: DateTimeWithAggregatesFilter;
}
