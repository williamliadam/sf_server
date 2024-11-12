import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MealPlanCreateManyInput } from './meal-plan-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyMealPlanArgs {

    @Field(() => [MealPlanCreateManyInput], {nullable:false})
    @Type(() => MealPlanCreateManyInput)
    data!: Array<MealPlanCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
