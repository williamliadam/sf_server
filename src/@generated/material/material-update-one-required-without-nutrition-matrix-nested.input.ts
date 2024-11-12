import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaterialCreateWithoutNutritionMatrixInput } from './material-create-without-nutrition-matrix.input';
import { Type } from 'class-transformer';
import { MaterialCreateOrConnectWithoutNutritionMatrixInput } from './material-create-or-connect-without-nutrition-matrix.input';
import { MaterialUpsertWithoutNutritionMatrixInput } from './material-upsert-without-nutrition-matrix.input';
import { Prisma } from '@prisma/client';
import { MaterialWhereUniqueInput } from './material-where-unique.input';
import { MaterialUpdateToOneWithWhereWithoutNutritionMatrixInput } from './material-update-to-one-with-where-without-nutrition-matrix.input';

@InputType()
export class MaterialUpdateOneRequiredWithoutNutritionMatrixNestedInput {

    @Field(() => MaterialCreateWithoutNutritionMatrixInput, {nullable:true})
    @Type(() => MaterialCreateWithoutNutritionMatrixInput)
    create?: MaterialCreateWithoutNutritionMatrixInput;

    @Field(() => MaterialCreateOrConnectWithoutNutritionMatrixInput, {nullable:true})
    @Type(() => MaterialCreateOrConnectWithoutNutritionMatrixInput)
    connectOrCreate?: MaterialCreateOrConnectWithoutNutritionMatrixInput;

    @Field(() => MaterialUpsertWithoutNutritionMatrixInput, {nullable:true})
    @Type(() => MaterialUpsertWithoutNutritionMatrixInput)
    upsert?: MaterialUpsertWithoutNutritionMatrixInput;

    @Field(() => MaterialWhereUniqueInput, {nullable:true})
    @Type(() => MaterialWhereUniqueInput)
    connect?: Prisma.AtLeast<MaterialWhereUniqueInput, 'id' | 'code'>;

    @Field(() => MaterialUpdateToOneWithWhereWithoutNutritionMatrixInput, {nullable:true})
    @Type(() => MaterialUpdateToOneWithWhereWithoutNutritionMatrixInput)
    update?: MaterialUpdateToOneWithWhereWithoutNutritionMatrixInput;
}
