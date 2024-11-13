import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaterialWhereInput } from './material-where.input';
import { Type } from 'class-transformer';
import { MaterialUpdateWithoutNutritionMatrixInput } from './material-update-without-nutrition-matrix.input';

@InputType()
export class MaterialUpdateToOneWithWhereWithoutNutritionMatrixInput {
	@Field(() => MaterialWhereInput, { nullable: true })
	@Type(() => MaterialWhereInput)
	where?: MaterialWhereInput;

	@Field(() => MaterialUpdateWithoutNutritionMatrixInput, { nullable: false })
	@Type(() => MaterialUpdateWithoutNutritionMatrixInput)
	data!: MaterialUpdateWithoutNutritionMatrixInput;
}
