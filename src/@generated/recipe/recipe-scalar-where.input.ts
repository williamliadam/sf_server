import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class RecipeScalarWhereInput {
	@Field(() => [RecipeScalarWhereInput], { nullable: true })
	AND?: Array<RecipeScalarWhereInput>;

	@Field(() => [RecipeScalarWhereInput], { nullable: true })
	OR?: Array<RecipeScalarWhereInput>;

	@Field(() => [RecipeScalarWhereInput], { nullable: true })
	NOT?: Array<RecipeScalarWhereInput>;

	@Field(() => IntFilter, { nullable: true })
	id?: IntFilter;

	@Field(() => StringFilter, { nullable: true })
	name?: StringFilter;

	@Field(() => IntFilter, { nullable: true })
	stars?: IntFilter;

	@Field(() => IntFilter, { nullable: true })
	authorId?: IntFilter;

	@Field(() => DateTimeFilter, { nullable: true })
	createdAt?: DateTimeFilter;

	@Field(() => DateTimeFilter, { nullable: true })
	updatedAt?: DateTimeFilter;
}
