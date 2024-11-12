import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumMealTypeFilter } from '../prisma/enum-meal-type-filter.input';

@InputType()
export class MealPlanScalarWhereInput {

    @Field(() => [MealPlanScalarWhereInput], {nullable:true})
    AND?: Array<MealPlanScalarWhereInput>;

    @Field(() => [MealPlanScalarWhereInput], {nullable:true})
    OR?: Array<MealPlanScalarWhereInput>;

    @Field(() => [MealPlanScalarWhereInput], {nullable:true})
    NOT?: Array<MealPlanScalarWhereInput>;

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
}
