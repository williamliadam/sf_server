import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaterialCreateWithoutNutritionMatrixInput } from './material-create-without-nutrition-matrix.input';
import { Type } from 'class-transformer';
import { MaterialCreateOrConnectWithoutNutritionMatrixInput } from './material-create-or-connect-without-nutrition-matrix.input';
import { Prisma } from '@prisma/client';
import { MaterialWhereUniqueInput } from './material-where-unique.input';

@InputType()
export class MaterialCreateNestedOneWithoutNutritionMatrixInput {
	@Field(() => MaterialCreateWithoutNutritionMatrixInput, { nullable: true })
	@Type(() => MaterialCreateWithoutNutritionMatrixInput)
	create?: MaterialCreateWithoutNutritionMatrixInput;

	@Field(() => MaterialCreateOrConnectWithoutNutritionMatrixInput, {
		nullable: true,
	})
	@Type(() => MaterialCreateOrConnectWithoutNutritionMatrixInput)
	connectOrCreate?: MaterialCreateOrConnectWithoutNutritionMatrixInput;

	@Field(() => MaterialWhereUniqueInput, { nullable: true })
	@Type(() => MaterialWhereUniqueInput)
	connect?: Prisma.AtLeast<MaterialWhereUniqueInput, 'id' | 'code'>;
}
