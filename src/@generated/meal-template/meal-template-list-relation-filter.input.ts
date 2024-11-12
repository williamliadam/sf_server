import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MealTemplateWhereInput } from './meal-template-where.input';

@InputType()
export class MealTemplateListRelationFilter {

    @Field(() => MealTemplateWhereInput, {nullable:true})
    every?: MealTemplateWhereInput;

    @Field(() => MealTemplateWhereInput, {nullable:true})
    some?: MealTemplateWhereInput;

    @Field(() => MealTemplateWhereInput, {nullable:true})
    none?: MealTemplateWhereInput;
}
