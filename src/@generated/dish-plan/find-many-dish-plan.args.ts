import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DishPlanWhereInput } from './dish-plan-where.input';
import { Type } from 'class-transformer';
import { DishPlanOrderByWithRelationInput } from './dish-plan-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DishPlanWhereUniqueInput } from './dish-plan-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DishPlanScalarFieldEnum } from './dish-plan-scalar-field.enum';

@ArgsType()
export class FindManyDishPlanArgs {

    @Field(() => DishPlanWhereInput, {nullable:true})
    @Type(() => DishPlanWhereInput)
    where?: DishPlanWhereInput;

    @Field(() => [DishPlanOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DishPlanOrderByWithRelationInput>;

    @Field(() => DishPlanWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<DishPlanWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [DishPlanScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DishPlanScalarFieldEnum>;
}
