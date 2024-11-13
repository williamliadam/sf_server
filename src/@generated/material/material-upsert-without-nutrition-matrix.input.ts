import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaterialUpdateWithoutNutritionMatrixInput } from './material-update-without-nutrition-matrix.input';
import { Type } from 'class-transformer';
import { MaterialCreateWithoutNutritionMatrixInput } from './material-create-without-nutrition-matrix.input';
import { MaterialWhereInput } from './material-where.input';

@InputType()
export class MaterialUpsertWithoutNutritionMatrixInput {
	@Field(() => MaterialUpdateWithoutNutritionMatrixInput, { nullable: false })
	@Type(() => MaterialUpdateWithoutNutritionMatrixInput)
	update!: MaterialUpdateWithoutNutritionMatrixInput;

	@Field(() => MaterialCreateWithoutNutritionMatrixInput, { nullable: false })
	@Type(() => MaterialCreateWithoutNutritionMatrixInput)
	create!: MaterialCreateWithoutNutritionMatrixInput;

	@Field(() => MaterialWhereInput, { nullable: true })
	@Type(() => MaterialWhereInput)
	where?: MaterialWhereInput;
}
