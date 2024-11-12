import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DishPlanCreateManyUsedMealPlanInput } from './dish-plan-create-many-used-meal-plan.input';
import { Type } from 'class-transformer';

@InputType()
export class DishPlanCreateManyUsedMealPlanInputEnvelope {

    @Field(() => [DishPlanCreateManyUsedMealPlanInput], {nullable:false})
    @Type(() => DishPlanCreateManyUsedMealPlanInput)
    data!: Array<DishPlanCreateManyUsedMealPlanInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
