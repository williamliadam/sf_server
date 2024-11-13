import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { IngredientWhereUniqueInput } from './ingredient-where-unique.input';
import { Type } from 'class-transformer';
import { IngredientUpdateWithoutUsedRecipeInput } from './ingredient-update-without-used-recipe.input';

@InputType()
export class IngredientUpdateWithWhereUniqueWithoutUsedRecipeInput {
	@Field(() => IngredientWhereUniqueInput, { nullable: false })
	@Type(() => IngredientWhereUniqueInput)
	where!: Prisma.AtLeast<IngredientWhereUniqueInput, 'id'>;

	@Field(() => IngredientUpdateWithoutUsedRecipeInput, { nullable: false })
	@Type(() => IngredientUpdateWithoutUsedRecipeInput)
	data!: IngredientUpdateWithoutUsedRecipeInput;
}
