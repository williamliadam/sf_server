import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MaterialCreateNestedOneWithoutNutritionMatrixInput } from '../material/material-create-nested-one-without-nutrition-matrix.input';

@InputType()
export class NutritionRowCreateWithoutNutirtionInput {

    @Field(() => Int, {nullable:false})
    percent!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => MaterialCreateNestedOneWithoutNutritionMatrixInput, {nullable:false})
    belongMaterial!: MaterialCreateNestedOneWithoutNutritionMatrixInput;
}
