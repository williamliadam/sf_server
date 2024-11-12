import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MealPlanScalarWhereInput } from './meal-plan-scalar-where.input';
import { Type } from 'class-transformer';
import { MealPlanUpdateManyMutationInput } from './meal-plan-update-many-mutation.input';

@InputType()
export class MealPlanUpdateManyWithWhereWithoutCreateByInput {

    @Field(() => MealPlanScalarWhereInput, {nullable:false})
    @Type(() => MealPlanScalarWhereInput)
    where!: MealPlanScalarWhereInput;

    @Field(() => MealPlanUpdateManyMutationInput, {nullable:false})
    @Type(() => MealPlanUpdateManyMutationInput)
    data!: MealPlanUpdateManyMutationInput;
}
