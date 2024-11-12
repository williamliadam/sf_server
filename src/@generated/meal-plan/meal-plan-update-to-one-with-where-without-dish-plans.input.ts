import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MealPlanWhereInput } from './meal-plan-where.input';
import { Type } from 'class-transformer';
import { MealPlanUpdateWithoutDishPlansInput } from './meal-plan-update-without-dish-plans.input';

@InputType()
export class MealPlanUpdateToOneWithWhereWithoutDishPlansInput {

    @Field(() => MealPlanWhereInput, {nullable:true})
    @Type(() => MealPlanWhereInput)
    where?: MealPlanWhereInput;

    @Field(() => MealPlanUpdateWithoutDishPlansInput, {nullable:false})
    @Type(() => MealPlanUpdateWithoutDishPlansInput)
    data!: MealPlanUpdateWithoutDishPlansInput;
}
