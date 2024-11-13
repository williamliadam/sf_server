import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DishPlanCreateWithoutPlanCookerInput } from './dish-plan-create-without-plan-cooker.input';
import { Type } from 'class-transformer';
import { DishPlanCreateOrConnectWithoutPlanCookerInput } from './dish-plan-create-or-connect-without-plan-cooker.input';
import { DishPlanUpsertWithWhereUniqueWithoutPlanCookerInput } from './dish-plan-upsert-with-where-unique-without-plan-cooker.input';
import { DishPlanCreateManyPlanCookerInputEnvelope } from './dish-plan-create-many-plan-cooker-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DishPlanWhereUniqueInput } from './dish-plan-where-unique.input';
import { DishPlanUpdateWithWhereUniqueWithoutPlanCookerInput } from './dish-plan-update-with-where-unique-without-plan-cooker.input';
import { DishPlanUpdateManyWithWhereWithoutPlanCookerInput } from './dish-plan-update-many-with-where-without-plan-cooker.input';
import { DishPlanScalarWhereInput } from './dish-plan-scalar-where.input';

@InputType()
export class DishPlanUncheckedUpdateManyWithoutPlanCookerNestedInput {
	@Field(() => [DishPlanCreateWithoutPlanCookerInput], { nullable: true })
	@Type(() => DishPlanCreateWithoutPlanCookerInput)
	create?: Array<DishPlanCreateWithoutPlanCookerInput>;

	@Field(() => [DishPlanCreateOrConnectWithoutPlanCookerInput], {
		nullable: true,
	})
	@Type(() => DishPlanCreateOrConnectWithoutPlanCookerInput)
	connectOrCreate?: Array<DishPlanCreateOrConnectWithoutPlanCookerInput>;

	@Field(() => [DishPlanUpsertWithWhereUniqueWithoutPlanCookerInput], {
		nullable: true,
	})
	@Type(() => DishPlanUpsertWithWhereUniqueWithoutPlanCookerInput)
	upsert?: Array<DishPlanUpsertWithWhereUniqueWithoutPlanCookerInput>;

	@Field(() => DishPlanCreateManyPlanCookerInputEnvelope, { nullable: true })
	@Type(() => DishPlanCreateManyPlanCookerInputEnvelope)
	createMany?: DishPlanCreateManyPlanCookerInputEnvelope;

	@Field(() => [DishPlanWhereUniqueInput], { nullable: true })
	@Type(() => DishPlanWhereUniqueInput)
	set?: Array<Prisma.AtLeast<DishPlanWhereUniqueInput, 'id'>>;

	@Field(() => [DishPlanWhereUniqueInput], { nullable: true })
	@Type(() => DishPlanWhereUniqueInput)
	disconnect?: Array<Prisma.AtLeast<DishPlanWhereUniqueInput, 'id'>>;

	@Field(() => [DishPlanWhereUniqueInput], { nullable: true })
	@Type(() => DishPlanWhereUniqueInput)
	delete?: Array<Prisma.AtLeast<DishPlanWhereUniqueInput, 'id'>>;

	@Field(() => [DishPlanWhereUniqueInput], { nullable: true })
	@Type(() => DishPlanWhereUniqueInput)
	connect?: Array<Prisma.AtLeast<DishPlanWhereUniqueInput, 'id'>>;

	@Field(() => [DishPlanUpdateWithWhereUniqueWithoutPlanCookerInput], {
		nullable: true,
	})
	@Type(() => DishPlanUpdateWithWhereUniqueWithoutPlanCookerInput)
	update?: Array<DishPlanUpdateWithWhereUniqueWithoutPlanCookerInput>;

	@Field(() => [DishPlanUpdateManyWithWhereWithoutPlanCookerInput], {
		nullable: true,
	})
	@Type(() => DishPlanUpdateManyWithWhereWithoutPlanCookerInput)
	updateMany?: Array<DishPlanUpdateManyWithWhereWithoutPlanCookerInput>;

	@Field(() => [DishPlanScalarWhereInput], { nullable: true })
	@Type(() => DishPlanScalarWhereInput)
	deleteMany?: Array<DishPlanScalarWhereInput>;
}
