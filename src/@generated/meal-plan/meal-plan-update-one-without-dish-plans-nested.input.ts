import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MealPlanCreateWithoutDishPlansInput } from './meal-plan-create-without-dish-plans.input';
import { Type } from 'class-transformer';
import { MealPlanCreateOrConnectWithoutDishPlansInput } from './meal-plan-create-or-connect-without-dish-plans.input';
import { MealPlanUpsertWithoutDishPlansInput } from './meal-plan-upsert-without-dish-plans.input';
import { MealPlanWhereInput } from './meal-plan-where.input';
import { Prisma } from '@prisma/client';
import { MealPlanWhereUniqueInput } from './meal-plan-where-unique.input';
import { MealPlanUpdateToOneWithWhereWithoutDishPlansInput } from './meal-plan-update-to-one-with-where-without-dish-plans.input';

@InputType()
export class MealPlanUpdateOneWithoutDishPlansNestedInput {
	@Field(() => MealPlanCreateWithoutDishPlansInput, { nullable: true })
	@Type(() => MealPlanCreateWithoutDishPlansInput)
	create?: MealPlanCreateWithoutDishPlansInput;

	@Field(() => MealPlanCreateOrConnectWithoutDishPlansInput, { nullable: true })
	@Type(() => MealPlanCreateOrConnectWithoutDishPlansInput)
	connectOrCreate?: MealPlanCreateOrConnectWithoutDishPlansInput;

	@Field(() => MealPlanUpsertWithoutDishPlansInput, { nullable: true })
	@Type(() => MealPlanUpsertWithoutDishPlansInput)
	upsert?: MealPlanUpsertWithoutDishPlansInput;

	@Field(() => MealPlanWhereInput, { nullable: true })
	@Type(() => MealPlanWhereInput)
	disconnect?: MealPlanWhereInput;

	@Field(() => MealPlanWhereInput, { nullable: true })
	@Type(() => MealPlanWhereInput)
	delete?: MealPlanWhereInput;

	@Field(() => MealPlanWhereUniqueInput, { nullable: true })
	@Type(() => MealPlanWhereUniqueInput)
	connect?: Prisma.AtLeast<MealPlanWhereUniqueInput, 'id'>;

	@Field(() => MealPlanUpdateToOneWithWhereWithoutDishPlansInput, {
		nullable: true,
	})
	@Type(() => MealPlanUpdateToOneWithWhereWithoutDishPlansInput)
	update?: MealPlanUpdateToOneWithWhereWithoutDishPlansInput;
}
