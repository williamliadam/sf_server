import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { NutritionRowWhereInput } from './nutrition-row-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { NutritionRelationFilter } from '../nutrition/nutrition-relation-filter.input';
import { MaterialRelationFilter } from '../material/material-relation-filter.input';

@InputType()
export class NutritionRowWhereUniqueInput {
	@Field(() => Int, { nullable: true })
	id?: number;

	@Field(() => [NutritionRowWhereInput], { nullable: true })
	AND?: Array<NutritionRowWhereInput>;

	@Field(() => [NutritionRowWhereInput], { nullable: true })
	OR?: Array<NutritionRowWhereInput>;

	@Field(() => [NutritionRowWhereInput], { nullable: true })
	NOT?: Array<NutritionRowWhereInput>;

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

	@Field(() => NutritionRelationFilter, { nullable: true })
	nutirtion?: NutritionRelationFilter;

	@Field(() => MaterialRelationFilter, { nullable: true })
	belongMaterial?: MaterialRelationFilter;
}
