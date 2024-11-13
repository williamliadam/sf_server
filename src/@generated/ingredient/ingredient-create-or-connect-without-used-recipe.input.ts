import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { IngredientWhereUniqueInput } from './ingredient-where-unique.input';
import { Type } from 'class-transformer';
import { IngredientCreateWithoutUsedRecipeInput } from './ingredient-create-without-used-recipe.input';

@InputType()
export class IngredientCreateOrConnectWithoutUsedRecipeInput {
	@Field(() => IngredientWhereUniqueInput, { nullable: false })
	@Type(() => IngredientWhereUniqueInput)
	where!: Prisma.AtLeast<IngredientWhereUniqueInput, 'id'>;

	@Field(() => IngredientCreateWithoutUsedRecipeInput, { nullable: false })
	@Type(() => IngredientCreateWithoutUsedRecipeInput)
	create!: IngredientCreateWithoutUsedRecipeInput;
}
