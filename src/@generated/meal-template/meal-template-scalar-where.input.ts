import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class MealTemplateScalarWhereInput {
	@Field(() => [MealTemplateScalarWhereInput], { nullable: true })
	AND?: Array<MealTemplateScalarWhereInput>;

	@Field(() => [MealTemplateScalarWhereInput], { nullable: true })
	OR?: Array<MealTemplateScalarWhereInput>;

	@Field(() => [MealTemplateScalarWhereInput], { nullable: true })
	NOT?: Array<MealTemplateScalarWhereInput>;

	@Field(() => IntFilter, { nullable: true })
	id?: IntFilter;

	@Field(() => StringFilter, { nullable: true })
	name?: StringFilter;

	@Field(() => IntFilter, { nullable: true })
	userId?: IntFilter;

	@Field(() => DateTimeFilter, { nullable: true })
	createdAt?: DateTimeFilter;

	@Field(() => DateTimeFilter, { nullable: true })
	updatedAt?: DateTimeFilter;
}
