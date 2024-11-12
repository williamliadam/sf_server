import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MaterialCreateNestedOneWithoutIngredientsInput } from '../material/material-create-nested-one-without-ingredients.input';
import { RecipeCreateNestedOneWithoutIngredientsInput } from '../recipe/recipe-create-nested-one-without-ingredients.input';

@InputType()
export class IngredientCreateWithoutUnitInput {

    @Field(() => Int, {nullable:false})
    amount!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => MaterialCreateNestedOneWithoutIngredientsInput, {nullable:false})
    material!: MaterialCreateNestedOneWithoutIngredientsInput;

    @Field(() => RecipeCreateNestedOneWithoutIngredientsInput, {nullable:true})
    usedRecipe?: RecipeCreateNestedOneWithoutIngredientsInput;
}
