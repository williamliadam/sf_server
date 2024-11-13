import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class BodyDetailScalarWhereWithAggregatesInput {
	@Field(() => [BodyDetailScalarWhereWithAggregatesInput], { nullable: true })
	AND?: Array<BodyDetailScalarWhereWithAggregatesInput>;

	@Field(() => [BodyDetailScalarWhereWithAggregatesInput], { nullable: true })
	OR?: Array<BodyDetailScalarWhereWithAggregatesInput>;

	@Field(() => [BodyDetailScalarWhereWithAggregatesInput], { nullable: true })
	NOT?: Array<BodyDetailScalarWhereWithAggregatesInput>;

	@Field(() => IntWithAggregatesFilter, { nullable: true })
	id?: IntWithAggregatesFilter;

	@Field(() => IntNullableWithAggregatesFilter, { nullable: true })
	weight?: IntNullableWithAggregatesFilter;

	@Field(() => IntNullableWithAggregatesFilter, { nullable: true })
	height?: IntNullableWithAggregatesFilter;

	@Field(() => IntNullableWithAggregatesFilter, { nullable: true })
	age?: IntNullableWithAggregatesFilter;

	@Field(() => IntNullableWithAggregatesFilter, { nullable: true })
	bmi?: IntNullableWithAggregatesFilter;

	@Field(() => IntNullableWithAggregatesFilter, { nullable: true })
	bmr?: IntNullableWithAggregatesFilter;

	@Field(() => IntNullableWithAggregatesFilter, { nullable: true })
	tdee?: IntNullableWithAggregatesFilter;

	@Field(() => IntWithAggregatesFilter, { nullable: true })
	userId?: IntWithAggregatesFilter;

	@Field(() => DateTimeWithAggregatesFilter, { nullable: true })
	createdAt?: DateTimeWithAggregatesFilter;

	@Field(() => DateTimeWithAggregatesFilter, { nullable: true })
	updatedAt?: DateTimeWithAggregatesFilter;
}
