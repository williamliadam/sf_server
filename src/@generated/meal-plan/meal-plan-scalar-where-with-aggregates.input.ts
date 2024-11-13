import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { EnumMealTypeWithAggregatesFilter } from '../prisma/enum-meal-type-with-aggregates-filter.input';

@InputType()
export class MealPlanScalarWhereWithAggregatesInput {
	@Field(() => [MealPlanScalarWhereWithAggregatesInput], { nullable: true })
	AND?: Array<MealPlanScalarWhereWithAggregatesInput>;

	@Field(() => [MealPlanScalarWhereWithAggregatesInput], { nullable: true })
	OR?: Array<MealPlanScalarWhereWithAggregatesInput>;

	@Field(() => [MealPlanScalarWhereWithAggregatesInput], { nullable: true })
	NOT?: Array<MealPlanScalarWhereWithAggregatesInput>;

	@Field(() => IntWithAggregatesFilter, { nullable: true })
	id?: IntWithAggregatesFilter;

	@Field(() => DateTimeNullableWithAggregatesFilter, { nullable: true })
	planTime?: DateTimeNullableWithAggregatesFilter;

	@Field(() => IntWithAggregatesFilter, { nullable: true })
	userId?: IntWithAggregatesFilter;

	@Field(() => DateTimeWithAggregatesFilter, { nullable: true })
	createdAt?: DateTimeWithAggregatesFilter;

	@Field(() => DateTimeWithAggregatesFilter, { nullable: true })
	updatedAt?: DateTimeWithAggregatesFilter;

	@Field(() => EnumMealTypeWithAggregatesFilter, { nullable: true })
	type?: EnumMealTypeWithAggregatesFilter;
}
