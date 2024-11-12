import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MealTemplateWhereInput } from './meal-template-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyMealTemplateArgs {

    @Field(() => MealTemplateWhereInput, {nullable:true})
    @Type(() => MealTemplateWhereInput)
    where?: MealTemplateWhereInput;
}
