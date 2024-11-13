import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DishPlanWhereUniqueInput } from './dish-plan-where-unique.input';
import { Type } from 'class-transformer';
import { DishPlanUpdateWithoutPlanCookerInput } from './dish-plan-update-without-plan-cooker.input';

@InputType()
export class DishPlanUpdateWithWhereUniqueWithoutPlanCookerInput {
	@Field(() => DishPlanWhereUniqueInput, { nullable: false })
	@Type(() => DishPlanWhereUniqueInput)
	where!: Prisma.AtLeast<DishPlanWhereUniqueInput, 'id'>;

	@Field(() => DishPlanUpdateWithoutPlanCookerInput, { nullable: false })
	@Type(() => DishPlanUpdateWithoutPlanCookerInput)
	data!: DishPlanUpdateWithoutPlanCookerInput;
}
