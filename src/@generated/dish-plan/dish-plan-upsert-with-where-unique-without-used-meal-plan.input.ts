import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DishPlanWhereUniqueInput } from './dish-plan-where-unique.input';
import { Type } from 'class-transformer';
import { DishPlanUpdateWithoutUsedMealPlanInput } from './dish-plan-update-without-used-meal-plan.input';
import { DishPlanCreateWithoutUsedMealPlanInput } from './dish-plan-create-without-used-meal-plan.input';

@InputType()
export class DishPlanUpsertWithWhereUniqueWithoutUsedMealPlanInput {
	@Field(() => DishPlanWhereUniqueInput, { nullable: false })
	@Type(() => DishPlanWhereUniqueInput)
	where!: Prisma.AtLeast<DishPlanWhereUniqueInput, 'id'>;

	@Field(() => DishPlanUpdateWithoutUsedMealPlanInput, { nullable: false })
	@Type(() => DishPlanUpdateWithoutUsedMealPlanInput)
	update!: DishPlanUpdateWithoutUsedMealPlanInput;

	@Field(() => DishPlanCreateWithoutUsedMealPlanInput, { nullable: false })
	@Type(() => DishPlanCreateWithoutUsedMealPlanInput)
	create!: DishPlanCreateWithoutUsedMealPlanInput;
}
