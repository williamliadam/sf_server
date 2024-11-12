import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { IngredientUncheckedCreateNestedManyWithoutMaterialInput } from '../ingredient/ingredient-unchecked-create-nested-many-without-material.input';

@InputType()
export class MaterialUncheckedCreateWithoutNutritionMatrixInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:false})
    nickName!: string;

    @Field(() => Int, {nullable:false})
    materiaCategoryId!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => IngredientUncheckedCreateNestedManyWithoutMaterialInput, {nullable:true})
    ingredients?: IngredientUncheckedCreateNestedManyWithoutMaterialInput;
}
