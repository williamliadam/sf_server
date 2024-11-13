import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class MaterialScalarWhereInput {
	@Field(() => [MaterialScalarWhereInput], { nullable: true })
	AND?: Array<MaterialScalarWhereInput>;

	@Field(() => [MaterialScalarWhereInput], { nullable: true })
	OR?: Array<MaterialScalarWhereInput>;

	@Field(() => [MaterialScalarWhereInput], { nullable: true })
	NOT?: Array<MaterialScalarWhereInput>;

	@Field(() => IntFilter, { nullable: true })
	id?: IntFilter;

	@Field(() => StringFilter, { nullable: true })
	name?: StringFilter;

	@Field(() => StringFilter, { nullable: true })
	code?: StringFilter;

	@Field(() => StringFilter, { nullable: true })
	nickName?: StringFilter;

	@Field(() => IntFilter, { nullable: true })
	materiaCategoryId?: IntFilter;

	@Field(() => DateTimeFilter, { nullable: true })
	createdAt?: DateTimeFilter;

	@Field(() => DateTimeFilter, { nullable: true })
	updatedAt?: DateTimeFilter;
}
