import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DishPlanCreateManyPlanCookerInput } from './dish-plan-create-many-plan-cooker.input';
import { Type } from 'class-transformer';

@InputType()
export class DishPlanCreateManyPlanCookerInputEnvelope {

    @Field(() => [DishPlanCreateManyPlanCookerInput], {nullable:false})
    @Type(() => DishPlanCreateManyPlanCookerInput)
    data!: Array<DishPlanCreateManyPlanCookerInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
