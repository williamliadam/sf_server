import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DishPlanWhereUniqueInput } from './dish-plan-where-unique.input';
import { Type } from 'class-transformer';
import { DishPlanCreateWithoutPlanCookerInput } from './dish-plan-create-without-plan-cooker.input';

@InputType()
export class DishPlanCreateOrConnectWithoutPlanCookerInput {

    @Field(() => DishPlanWhereUniqueInput, {nullable:false})
    @Type(() => DishPlanWhereUniqueInput)
    where!: Prisma.AtLeast<DishPlanWhereUniqueInput, 'id'>;

    @Field(() => DishPlanCreateWithoutPlanCookerInput, {nullable:false})
    @Type(() => DishPlanCreateWithoutPlanCookerInput)
    create!: DishPlanCreateWithoutPlanCookerInput;
}
