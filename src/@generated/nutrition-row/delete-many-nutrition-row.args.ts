import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NutritionRowWhereInput } from './nutrition-row-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyNutritionRowArgs {

    @Field(() => NutritionRowWhereInput, {nullable:true})
    @Type(() => NutritionRowWhereInput)
    where?: NutritionRowWhereInput;
}
