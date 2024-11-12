import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { NutritionCreateNestedOneWithoutUsedRowInput } from '../nutrition/nutrition-create-nested-one-without-used-row.input';
import { MaterialCreateNestedOneWithoutNutritionMatrixInput } from '../material/material-create-nested-one-without-nutrition-matrix.input';

@InputType()
export class NutritionRowCreateInput {

    @Field(() => Int, {nullable:false})
    percent!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => NutritionCreateNestedOneWithoutUsedRowInput, {nullable:false})
    nutirtion!: NutritionCreateNestedOneWithoutUsedRowInput;

    @Field(() => MaterialCreateNestedOneWithoutNutritionMatrixInput, {nullable:false})
    belongMaterial!: MaterialCreateNestedOneWithoutNutritionMatrixInput;
}
