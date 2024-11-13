import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MealPlanCreateWithoutCreateByInput } from './meal-plan-create-without-create-by.input';
import { Type } from 'class-transformer';
import { MealPlanCreateOrConnectWithoutCreateByInput } from './meal-plan-create-or-connect-without-create-by.input';
import { MealPlanCreateManyCreateByInputEnvelope } from './meal-plan-create-many-create-by-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MealPlanWhereUniqueInput } from './meal-plan-where-unique.input';

@InputType()
export class MealPlanUncheckedCreateNestedManyWithoutCreateByInput {
	@Field(() => [MealPlanCreateWithoutCreateByInput], { nullable: true })
	@Type(() => MealPlanCreateWithoutCreateByInput)
	create?: Array<MealPlanCreateWithoutCreateByInput>;

	@Field(() => [MealPlanCreateOrConnectWithoutCreateByInput], {
		nullable: true,
	})
	@Type(() => MealPlanCreateOrConnectWithoutCreateByInput)
	connectOrCreate?: Array<MealPlanCreateOrConnectWithoutCreateByInput>;

	@Field(() => MealPlanCreateManyCreateByInputEnvelope, { nullable: true })
	@Type(() => MealPlanCreateManyCreateByInputEnvelope)
	createMany?: MealPlanCreateManyCreateByInputEnvelope;

	@Field(() => [MealPlanWhereUniqueInput], { nullable: true })
	@Type(() => MealPlanWhereUniqueInput)
	connect?: Array<Prisma.AtLeast<MealPlanWhereUniqueInput, 'id'>>;
}
