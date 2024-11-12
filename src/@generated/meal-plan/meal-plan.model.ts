import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MealType } from '../prisma/meal-type.enum';
import { DishPlan } from '../dish-plan/dish-plan.model';
import { User } from '../user/user.model';
import { MealPlanCount } from './meal-plan-count.output';

@ObjectType()
export class MealPlan {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:true})
    planTime!: Date | null;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => MealType, {nullable:false,defaultValue:'MEAL'})
    type!: keyof typeof MealType;

    @Field(() => [DishPlan], {nullable:true})
    dishPlans?: Array<DishPlan>;

    @Field(() => User, {nullable:false})
    createBy?: User;

    @Field(() => MealPlanCount, {nullable:false})
    _count?: MealPlanCount;
}
