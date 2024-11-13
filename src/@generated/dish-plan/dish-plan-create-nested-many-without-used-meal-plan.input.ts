import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DishPlanCreateWithoutUsedMealPlanInput } from './dish-plan-create-without-used-meal-plan.input';
import { Type } from 'class-transformer';
import { DishPlanCreateOrConnectWithoutUsedMealPlanInput } from './dish-plan-create-or-connect-without-used-meal-plan.input';
import { DishPlanCreateManyUsedMealPlanInputEnvelope } from './dish-plan-create-many-used-meal-plan-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DishPlanWhereUniqueInput } from './dish-plan-where-unique.input';

@InputType()
export class DishPlanCreateNestedManyWithoutUsedMealPlanInput {
	@Field(() => [DishPlanCreateWithoutUsedMealPlanInput], { nullable: true })
	@Type(() => DishPlanCreateWithoutUsedMealPlanInput)
	create?: Array<DishPlanCreateWithoutUsedMealPlanInput>;

	@Field(() => [DishPlanCreateOrConnectWithoutUsedMealPlanInput], {
		nullable: true,
	})
	@Type(() => DishPlanCreateOrConnectWithoutUsedMealPlanInput)
	connectOrCreate?: Array<DishPlanCreateOrConnectWithoutUsedMealPlanInput>;

	@Field(() => DishPlanCreateManyUsedMealPlanInputEnvelope, { nullable: true })
	@Type(() => DishPlanCreateManyUsedMealPlanInputEnvelope)
	createMany?: DishPlanCreateManyUsedMealPlanInputEnvelope;

	@Field(() => [DishPlanWhereUniqueInput], { nullable: true })
	@Type(() => DishPlanWhereUniqueInput)
	connect?: Array<Prisma.AtLeast<DishPlanWhereUniqueInput, 'id'>>;
}
