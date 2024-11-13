import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BodyDetailWhereInput } from './body-detail-where.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class BodyDetailWhereUniqueInput {
	@Field(() => Int, { nullable: true })
	id?: number;

	@Field(() => Int, { nullable: true })
	userId?: number;

	@Field(() => [BodyDetailWhereInput], { nullable: true })
	AND?: Array<BodyDetailWhereInput>;

	@Field(() => [BodyDetailWhereInput], { nullable: true })
	OR?: Array<BodyDetailWhereInput>;

	@Field(() => [BodyDetailWhereInput], { nullable: true })
	NOT?: Array<BodyDetailWhereInput>;

	@Field(() => IntNullableFilter, { nullable: true })
	weight?: IntNullableFilter;

	@Field(() => IntNullableFilter, { nullable: true })
	height?: IntNullableFilter;

	@Field(() => IntNullableFilter, { nullable: true })
	age?: IntNullableFilter;

	@Field(() => IntNullableFilter, { nullable: true })
	bmi?: IntNullableFilter;

	@Field(() => IntNullableFilter, { nullable: true })
	bmr?: IntNullableFilter;

	@Field(() => IntNullableFilter, { nullable: true })
	tdee?: IntNullableFilter;

	@Field(() => DateTimeFilter, { nullable: true })
	createdAt?: DateTimeFilter;

	@Field(() => DateTimeFilter, { nullable: true })
	updatedAt?: DateTimeFilter;

	@Field(() => UserRelationFilter, { nullable: true })
	user?: UserRelationFilter;
}
