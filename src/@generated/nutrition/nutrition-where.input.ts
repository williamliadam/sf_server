import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { NutritionRowListRelationFilter } from '../nutrition-row/nutrition-row-list-relation-filter.input';

@InputType()
export class NutritionWhereInput {
	@Field(() => [NutritionWhereInput], { nullable: true })
	AND?: Array<NutritionWhereInput>;

	@Field(() => [NutritionWhereInput], { nullable: true })
	OR?: Array<NutritionWhereInput>;

	@Field(() => [NutritionWhereInput], { nullable: true })
	NOT?: Array<NutritionWhereInput>;

	@Field(() => IntFilter, { nullable: true })
	id?: IntFilter;

	@Field(() => StringFilter, { nullable: true })
	code?: StringFilter;

	@Field(() => StringFilter, { nullable: true })
	name?: StringFilter;

	@Field(() => DateTimeFilter, { nullable: true })
	createdAt?: DateTimeFilter;

	@Field(() => DateTimeFilter, { nullable: true })
	updatedAt?: DateTimeFilter;

	@Field(() => NutritionRowListRelationFilter, { nullable: true })
	usedRow?: NutritionRowListRelationFilter;
}
