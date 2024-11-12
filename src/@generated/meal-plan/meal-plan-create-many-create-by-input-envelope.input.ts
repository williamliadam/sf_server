import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MealPlanCreateManyCreateByInput } from './meal-plan-create-many-create-by.input';
import { Type } from 'class-transformer';

@InputType()
export class MealPlanCreateManyCreateByInputEnvelope {

    @Field(() => [MealPlanCreateManyCreateByInput], {nullable:false})
    @Type(() => MealPlanCreateManyCreateByInput)
    data!: Array<MealPlanCreateManyCreateByInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
