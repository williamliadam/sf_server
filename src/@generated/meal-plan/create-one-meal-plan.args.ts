import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MealPlanCreateInput } from './meal-plan-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneMealPlanArgs {

    @Field(() => MealPlanCreateInput, {nullable:false})
    @Type(() => MealPlanCreateInput)
    data!: MealPlanCreateInput;
}
