import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class DishPlanScalarWhereInput {

    @Field(() => [DishPlanScalarWhereInput], {nullable:true})
    AND?: Array<DishPlanScalarWhereInput>;

    @Field(() => [DishPlanScalarWhereInput], {nullable:true})
    OR?: Array<DishPlanScalarWhereInput>;

    @Field(() => [DishPlanScalarWhereInput], {nullable:true})
    NOT?: Array<DishPlanScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    recipeId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    amount?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    planCookerId?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    mealPlanId?: IntNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
