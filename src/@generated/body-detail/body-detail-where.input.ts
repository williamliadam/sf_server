import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class BodyDetailWhereInput {
	@Field(() => [BodyDetailWhereInput], { nullable: true })
	AND?: Array<BodyDetailWhereInput>;

	@Field(() => [BodyDetailWhereInput], { nullable: true })
	OR?: Array<BodyDetailWhereInput>;

	@Field(() => [BodyDetailWhereInput], { nullable: true })
	NOT?: Array<BodyDetailWhereInput>;

	@Field(() => IntFilter, { nullable: true })
	id?: IntFilter;

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

	@Field(() => IntFilter, { nullable: true })
	userId?: IntFilter;

	@Field(() => DateTimeFilter, { nullable: true })
	createdAt?: DateTimeFilter;

	@Field(() => DateTimeFilter, { nullable: true })
	updatedAt?: DateTimeFilter;

	@Field(() => UserRelationFilter, { nullable: true })
	user?: UserRelationFilter;
}
