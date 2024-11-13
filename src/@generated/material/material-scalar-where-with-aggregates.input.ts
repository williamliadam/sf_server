import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class MaterialScalarWhereWithAggregatesInput {
	@Field(() => [MaterialScalarWhereWithAggregatesInput], { nullable: true })
	AND?: Array<MaterialScalarWhereWithAggregatesInput>;

	@Field(() => [MaterialScalarWhereWithAggregatesInput], { nullable: true })
	OR?: Array<MaterialScalarWhereWithAggregatesInput>;

	@Field(() => [MaterialScalarWhereWithAggregatesInput], { nullable: true })
	NOT?: Array<MaterialScalarWhereWithAggregatesInput>;

	@Field(() => IntWithAggregatesFilter, { nullable: true })
	id?: IntWithAggregatesFilter;

	@Field(() => StringWithAggregatesFilter, { nullable: true })
	name?: StringWithAggregatesFilter;

	@Field(() => StringWithAggregatesFilter, { nullable: true })
	code?: StringWithAggregatesFilter;

	@Field(() => StringWithAggregatesFilter, { nullable: true })
	nickName?: StringWithAggregatesFilter;

	@Field(() => IntWithAggregatesFilter, { nullable: true })
	materiaCategoryId?: IntWithAggregatesFilter;

	@Field(() => DateTimeWithAggregatesFilter, { nullable: true })
	createdAt?: DateTimeWithAggregatesFilter;

	@Field(() => DateTimeWithAggregatesFilter, { nullable: true })
	updatedAt?: DateTimeWithAggregatesFilter;
}
