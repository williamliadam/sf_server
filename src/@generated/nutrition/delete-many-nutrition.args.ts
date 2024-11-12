import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NutritionWhereInput } from './nutrition-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyNutritionArgs {

    @Field(() => NutritionWhereInput, {nullable:true})
    @Type(() => NutritionWhereInput)
    where?: NutritionWhereInput;
}
