import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MealPlanUpdateManyMutationInput } from './meal-plan-update-many-mutation.input';
import { Type } from 'class-transformer';
import { MealPlanWhereInput } from './meal-plan-where.input';

@ArgsType()
export class UpdateManyMealPlanArgs {

    @Field(() => MealPlanUpdateManyMutationInput, {nullable:false})
    @Type(() => MealPlanUpdateManyMutationInput)
    data!: MealPlanUpdateManyMutationInput;

    @Field(() => MealPlanWhereInput, {nullable:true})
    @Type(() => MealPlanWhereInput)
    where?: MealPlanWhereInput;
}
