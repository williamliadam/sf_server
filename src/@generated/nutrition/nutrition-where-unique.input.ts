import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { NutritionWhereInput } from './nutrition-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { NutritionRowListRelationFilter } from '../nutrition-row/nutrition-row-list-relation-filter.input';

@InputType()
export class NutritionWhereUniqueInput {
	@Field(() => Int, { nullable: true })
	id?: number;

	@Field(() => String, { nullable: true })
	code?: string;

	@Field(() => [NutritionWhereInput], { nullable: true })
	AND?: Array<NutritionWhereInput>;

	@Field(() => [NutritionWhereInput], { nullable: true })
	OR?: Array<NutritionWhereInput>;

	@Field(() => [NutritionWhereInput], { nullable: true })
	NOT?: Array<NutritionWhereInput>;

	@Field(() => StringFilter, { nullable: true })
	name?: StringFilter;

	@Field(() => DateTimeFilter, { nullable: true })
	createdAt?: DateTimeFilter;

	@Field(() => DateTimeFilter, { nullable: true })
	updatedAt?: DateTimeFilter;

	@Field(() => NutritionRowListRelationFilter, { nullable: true })
	usedRow?: NutritionRowListRelationFilter;
}
