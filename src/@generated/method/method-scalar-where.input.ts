import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class MethodScalarWhereInput {
	@Field(() => [MethodScalarWhereInput], { nullable: true })
	AND?: Array<MethodScalarWhereInput>;

	@Field(() => [MethodScalarWhereInput], { nullable: true })
	OR?: Array<MethodScalarWhereInput>;

	@Field(() => [MethodScalarWhereInput], { nullable: true })
	NOT?: Array<MethodScalarWhereInput>;

	@Field(() => IntFilter, { nullable: true })
	id?: IntFilter;

	@Field(() => StringFilter, { nullable: true })
	code?: StringFilter;

	@Field(() => StringFilter, { nullable: true })
	name?: StringFilter;

	@Field(() => StringFilter, { nullable: true })
	desc?: StringFilter;

	@Field(() => IntNullableFilter, { nullable: true })
	recipeId?: IntNullableFilter;

	@Field(() => DateTimeFilter, { nullable: true })
	createdAt?: DateTimeFilter;

	@Field(() => DateTimeFilter, { nullable: true })
	updatedAt?: DateTimeFilter;
}
