import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { IngredientWhereUniqueInput } from './ingredient-where-unique.input';
import { Type } from 'class-transformer';
import { IngredientCreateWithoutMaterialInput } from './ingredient-create-without-material.input';

@InputType()
export class IngredientCreateOrConnectWithoutMaterialInput {
	@Field(() => IngredientWhereUniqueInput, { nullable: false })
	@Type(() => IngredientWhereUniqueInput)
	where!: Prisma.AtLeast<IngredientWhereUniqueInput, 'id'>;

	@Field(() => IngredientCreateWithoutMaterialInput, { nullable: false })
	@Type(() => IngredientCreateWithoutMaterialInput)
	create!: IngredientCreateWithoutMaterialInput;
}
