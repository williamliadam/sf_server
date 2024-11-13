import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DishPlanWhereUniqueInput } from './dish-plan-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueDishPlanArgs {
	@Field(() => DishPlanWhereUniqueInput, { nullable: false })
	@Type(() => DishPlanWhereUniqueInput)
	where!: Prisma.AtLeast<DishPlanWhereUniqueInput, 'id'>;
}
