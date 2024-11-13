import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IngredientCreateWithoutUsedRecipeInput } from './ingredient-create-without-used-recipe.input';
import { Type } from 'class-transformer';
import { IngredientCreateOrConnectWithoutUsedRecipeInput } from './ingredient-create-or-connect-without-used-recipe.input';
import { IngredientCreateManyUsedRecipeInputEnvelope } from './ingredient-create-many-used-recipe-input-envelope.input';
import { Prisma } from '@prisma/client';
import { IngredientWhereUniqueInput } from './ingredient-where-unique.input';

@InputType()
export class IngredientUncheckedCreateNestedManyWithoutUsedRecipeInput {
	@Field(() => [IngredientCreateWithoutUsedRecipeInput], { nullable: true })
	@Type(() => IngredientCreateWithoutUsedRecipeInput)
	create?: Array<IngredientCreateWithoutUsedRecipeInput>;

	@Field(() => [IngredientCreateOrConnectWithoutUsedRecipeInput], {
		nullable: true,
	})
	@Type(() => IngredientCreateOrConnectWithoutUsedRecipeInput)
	connectOrCreate?: Array<IngredientCreateOrConnectWithoutUsedRecipeInput>;

	@Field(() => IngredientCreateManyUsedRecipeInputEnvelope, { nullable: true })
	@Type(() => IngredientCreateManyUsedRecipeInputEnvelope)
	createMany?: IngredientCreateManyUsedRecipeInputEnvelope;

	@Field(() => [IngredientWhereUniqueInput], { nullable: true })
	@Type(() => IngredientWhereUniqueInput)
	connect?: Array<Prisma.AtLeast<IngredientWhereUniqueInput, 'id'>>;
}
