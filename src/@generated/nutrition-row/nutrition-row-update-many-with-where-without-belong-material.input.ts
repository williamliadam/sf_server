import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionRowScalarWhereInput } from './nutrition-row-scalar-where.input';
import { Type } from 'class-transformer';
import { NutritionRowUpdateManyMutationInput } from './nutrition-row-update-many-mutation.input';

@InputType()
export class NutritionRowUpdateManyWithWhereWithoutBelongMaterialInput {
	@Field(() => NutritionRowScalarWhereInput, { nullable: false })
	@Type(() => NutritionRowScalarWhereInput)
	where!: NutritionRowScalarWhereInput;

	@Field(() => NutritionRowUpdateManyMutationInput, { nullable: false })
	@Type(() => NutritionRowUpdateManyMutationInput)
	data!: NutritionRowUpdateManyMutationInput;
}
