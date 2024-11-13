import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MealPlanUpdateInput } from './meal-plan-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { MealPlanWhereUniqueInput } from './meal-plan-where-unique.input';

@ArgsType()
export class UpdateOneMealPlanArgs {
	@Field(() => MealPlanUpdateInput, { nullable: false })
	@Type(() => MealPlanUpdateInput)
	data!: MealPlanUpdateInput;

	@Field(() => MealPlanWhereUniqueInput, { nullable: false })
	@Type(() => MealPlanWhereUniqueInput)
	where!: Prisma.AtLeast<MealPlanWhereUniqueInput, 'id'>;
}
