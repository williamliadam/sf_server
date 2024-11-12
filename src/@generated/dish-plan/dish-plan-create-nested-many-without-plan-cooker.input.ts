import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DishPlanCreateWithoutPlanCookerInput } from './dish-plan-create-without-plan-cooker.input';
import { Type } from 'class-transformer';
import { DishPlanCreateOrConnectWithoutPlanCookerInput } from './dish-plan-create-or-connect-without-plan-cooker.input';
import { DishPlanCreateManyPlanCookerInputEnvelope } from './dish-plan-create-many-plan-cooker-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DishPlanWhereUniqueInput } from './dish-plan-where-unique.input';

@InputType()
export class DishPlanCreateNestedManyWithoutPlanCookerInput {

    @Field(() => [DishPlanCreateWithoutPlanCookerInput], {nullable:true})
    @Type(() => DishPlanCreateWithoutPlanCookerInput)
    create?: Array<DishPlanCreateWithoutPlanCookerInput>;

    @Field(() => [DishPlanCreateOrConnectWithoutPlanCookerInput], {nullable:true})
    @Type(() => DishPlanCreateOrConnectWithoutPlanCookerInput)
    connectOrCreate?: Array<DishPlanCreateOrConnectWithoutPlanCookerInput>;

    @Field(() => DishPlanCreateManyPlanCookerInputEnvelope, {nullable:true})
    @Type(() => DishPlanCreateManyPlanCookerInputEnvelope)
    createMany?: DishPlanCreateManyPlanCookerInputEnvelope;

    @Field(() => [DishPlanWhereUniqueInput], {nullable:true})
    @Type(() => DishPlanWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DishPlanWhereUniqueInput, 'id'>>;
}
