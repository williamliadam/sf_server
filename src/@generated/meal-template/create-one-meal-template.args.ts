import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MealTemplateCreateInput } from './meal-template-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneMealTemplateArgs {

    @Field(() => MealTemplateCreateInput, {nullable:false})
    @Type(() => MealTemplateCreateInput)
    data!: MealTemplateCreateInput;
}
