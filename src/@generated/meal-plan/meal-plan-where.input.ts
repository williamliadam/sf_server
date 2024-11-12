import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumMealTypeFilter } from '../prisma/enum-meal-type-filter.input';
import { DishPlanListRelationFilter } from '../dish-plan/dish-plan-list-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class MealPlanWhereInput {

    @Field(() => [MealPlanWhereInput], {nullable:true})
    AND?: Array<MealPlanWhereInput>;

    @Field(() => [MealPlanWhereInput], {nullable:true})
    OR?: Array<MealPlanWhereInput>;

    @Field(() => [MealPlanWhereInput], {nullable:true})
    NOT?: Array<MealPlanWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    planTime?: DateTimeNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => EnumMealTypeFilter, {nullable:true})
    type?: EnumMealTypeFilter;

    @Field(() => DishPlanListRelationFilter, {nullable:true})
    dishPlans?: DishPlanListRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    createBy?: UserRelationFilter;
}
