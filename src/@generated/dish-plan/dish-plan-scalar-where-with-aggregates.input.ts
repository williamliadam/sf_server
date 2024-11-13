import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class DishPlanScalarWhereWithAggregatesInput {
	@Field(() => [DishPlanScalarWhereWithAggregatesInput], { nullable: true })
	AND?: Array<DishPlanScalarWhereWithAggregatesInput>;

	@Field(() => [DishPlanScalarWhereWithAggregatesInput], { nullable: true })
	OR?: Array<DishPlanScalarWhereWithAggregatesInput>;

	@Field(() => [DishPlanScalarWhereWithAggregatesInput], { nullable: true })
	NOT?: Array<DishPlanScalarWhereWithAggregatesInput>;

	@Field(() => IntWithAggregatesFilter, { nullable: true })
	id?: IntWithAggregatesFilter;

	@Field(() => IntWithAggregatesFilter, { nullable: true })
	recipeId?: IntWithAggregatesFilter;

	@Field(() => IntWithAggregatesFilter, { nullable: true })
	amount?: IntWithAggregatesFilter;

	@Field(() => IntWithAggregatesFilter, { nullable: true })
	planCookerId?: IntWithAggregatesFilter;

	@Field(() => IntNullableWithAggregatesFilter, { nullable: true })
	mealPlanId?: IntNullableWithAggregatesFilter;

	@Field(() => DateTimeWithAggregatesFilter, { nullable: true })
	createdAt?: DateTimeWithAggregatesFilter;

	@Field(() => DateTimeWithAggregatesFilter, { nullable: true })
	updatedAt?: DateTimeWithAggregatesFilter;
}
