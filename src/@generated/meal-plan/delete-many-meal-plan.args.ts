import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MealPlanWhereInput } from './meal-plan-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyMealPlanArgs {

    @Field(() => MealPlanWhereInput, {nullable:true})
    @Type(() => MealPlanWhereInput)
    where?: MealPlanWhereInput;
}
