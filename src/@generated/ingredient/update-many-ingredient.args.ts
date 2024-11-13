import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { IngredientUpdateManyMutationInput } from './ingredient-update-many-mutation.input';
import { Type } from 'class-transformer';
import { IngredientWhereInput } from './ingredient-where.input';

@ArgsType()
export class UpdateManyIngredientArgs {
	@Field(() => IngredientUpdateManyMutationInput, { nullable: false })
	@Type(() => IngredientUpdateManyMutationInput)
	data!: IngredientUpdateManyMutationInput;

	@Field(() => IngredientWhereInput, { nullable: true })
	@Type(() => IngredientWhereInput)
	where?: IngredientWhereInput;
}
