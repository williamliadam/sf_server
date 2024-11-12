import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MealTemplateWhereInput } from './meal-template-where.input';

@InputType()
export class MealTemplateNullableRelationFilter {

    @Field(() => MealTemplateWhereInput, {nullable:true})
    is?: MealTemplateWhereInput;

    @Field(() => MealTemplateWhereInput, {nullable:true})
    isNot?: MealTemplateWhereInput;
}
