import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class NutritionRowScalarWhereInput {
	@Field(() => [NutritionRowScalarWhereInput], { nullable: true })
	AND?: Array<NutritionRowScalarWhereInput>;

	@Field(() => [NutritionRowScalarWhereInput], { nullable: true })
	OR?: Array<NutritionRowScalarWhereInput>;

	@Field(() => [NutritionRowScalarWhereInput], { nullable: true })
	NOT?: Array<NutritionRowScalarWhereInput>;

	@Field(() => IntFilter, { nullable: true })
	id?: IntFilter;

	@Field(() => IntFilter, { nullable: true })
	nutirtionId?: IntFilter;

	@Field(() => IntFilter, { nullable: true })
	percent?: IntFilter;

	@Field(() => IntFilter, { nullable: true })
	belongToId?: IntFilter;

	@Field(() => DateTimeFilter, { nullable: true })
	createdAt?: DateTimeFilter;

	@Field(() => DateTimeFilter, { nullable: true })
	updatedAt?: DateTimeFilter;
}
