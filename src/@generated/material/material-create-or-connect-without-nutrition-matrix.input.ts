import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MaterialWhereUniqueInput } from './material-where-unique.input';
import { Type } from 'class-transformer';
import { MaterialCreateWithoutNutritionMatrixInput } from './material-create-without-nutrition-matrix.input';

@InputType()
export class MaterialCreateOrConnectWithoutNutritionMatrixInput {
	@Field(() => MaterialWhereUniqueInput, { nullable: false })
	@Type(() => MaterialWhereUniqueInput)
	where!: Prisma.AtLeast<MaterialWhereUniqueInput, 'id' | 'code'>;

	@Field(() => MaterialCreateWithoutNutritionMatrixInput, { nullable: false })
	@Type(() => MaterialCreateWithoutNutritionMatrixInput)
	create!: MaterialCreateWithoutNutritionMatrixInput;
}
