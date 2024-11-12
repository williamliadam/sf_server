import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DishPlanUpdateInput } from './dish-plan-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { DishPlanWhereUniqueInput } from './dish-plan-where-unique.input';

@ArgsType()
export class UpdateOneDishPlanArgs {

    @Field(() => DishPlanUpdateInput, {nullable:false})
    @Type(() => DishPlanUpdateInput)
    data!: DishPlanUpdateInput;

    @Field(() => DishPlanWhereUniqueInput, {nullable:false})
    @Type(() => DishPlanWhereUniqueInput)
    where!: Prisma.AtLeast<DishPlanWhereUniqueInput, 'id'>;
}
