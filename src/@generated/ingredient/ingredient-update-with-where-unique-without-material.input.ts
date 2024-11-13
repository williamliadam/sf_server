import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { IngredientWhereUniqueInput } from './ingredient-where-unique.input';
import { Type } from 'class-transformer';
import { IngredientUpdateWithoutMaterialInput } from './ingredient-update-without-material.input';

@InputType()
export class IngredientUpdateWithWhereUniqueWithoutMaterialInput {
	@Field(() => IngredientWhereUniqueInput, { nullable: false })
	@Type(() => IngredientWhereUniqueInput)
	where!: Prisma.AtLeast<IngredientWhereUniqueInput, 'id'>;

	@Field(() => IngredientUpdateWithoutMaterialInput, { nullable: false })
	@Type(() => IngredientUpdateWithoutMaterialInput)
	data!: IngredientUpdateWithoutMaterialInput;
}
