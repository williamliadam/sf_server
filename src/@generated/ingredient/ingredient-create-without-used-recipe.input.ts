import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MaterialCreateNestedOneWithoutIngredientsInput } from '../material/material-create-nested-one-without-ingredients.input';
import { MateriaUnitCreateNestedOneWithoutIngredientsInput } from '../materia-unit/materia-unit-create-nested-one-without-ingredients.input';

@InputType()
export class IngredientCreateWithoutUsedRecipeInput {

    @Field(() => Int, {nullable:false})
    amount!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => MaterialCreateNestedOneWithoutIngredientsInput, {nullable:false})
    material!: MaterialCreateNestedOneWithoutIngredientsInput;

    @Field(() => MateriaUnitCreateNestedOneWithoutIngredientsInput, {nullable:false})
    unit!: MateriaUnitCreateNestedOneWithoutIngredientsInput;
}
