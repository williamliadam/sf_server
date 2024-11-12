import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeWhereInput } from './recipe-where.input';

@InputType()
export class RecipeRelationFilter {

    @Field(() => RecipeWhereInput, {nullable:true})
    is?: RecipeWhereInput;

    @Field(() => RecipeWhereInput, {nullable:true})
    isNot?: RecipeWhereInput;
}
