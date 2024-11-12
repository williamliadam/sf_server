import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IngredientWhereInput } from './ingredient-where.input';

@InputType()
export class IngredientListRelationFilter {

    @Field(() => IngredientWhereInput, {nullable:true})
    every?: IngredientWhereInput;

    @Field(() => IngredientWhereInput, {nullable:true})
    some?: IngredientWhereInput;

    @Field(() => IngredientWhereInput, {nullable:true})
    none?: IngredientWhereInput;
}
