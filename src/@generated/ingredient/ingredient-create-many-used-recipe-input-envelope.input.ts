import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IngredientCreateManyUsedRecipeInput } from './ingredient-create-many-used-recipe.input';
import { Type } from 'class-transformer';

@InputType()
export class IngredientCreateManyUsedRecipeInputEnvelope {
	@Field(() => [IngredientCreateManyUsedRecipeInput], { nullable: false })
	@Type(() => IngredientCreateManyUsedRecipeInput)
	data!: Array<IngredientCreateManyUsedRecipeInput>;

	@Field(() => Boolean, { nullable: true })
	skipDuplicates?: boolean;
}
