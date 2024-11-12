import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DishPlanCreateManyInput } from './dish-plan-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyDishPlanArgs {

    @Field(() => [DishPlanCreateManyInput], {nullable:false})
    @Type(() => DishPlanCreateManyInput)
    data!: Array<DishPlanCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
