import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IngredientCreateWithoutMaterialInput } from './ingredient-create-without-material.input';
import { Type } from 'class-transformer';
import { IngredientCreateOrConnectWithoutMaterialInput } from './ingredient-create-or-connect-without-material.input';
import { IngredientCreateManyMaterialInputEnvelope } from './ingredient-create-many-material-input-envelope.input';
import { Prisma } from '@prisma/client';
import { IngredientWhereUniqueInput } from './ingredient-where-unique.input';

@InputType()
export class IngredientUncheckedCreateNestedManyWithoutMaterialInput {
	@Field(() => [IngredientCreateWithoutMaterialInput], { nullable: true })
	@Type(() => IngredientCreateWithoutMaterialInput)
	create?: Array<IngredientCreateWithoutMaterialInput>;

	@Field(() => [IngredientCreateOrConnectWithoutMaterialInput], {
		nullable: true,
	})
	@Type(() => IngredientCreateOrConnectWithoutMaterialInput)
	connectOrCreate?: Array<IngredientCreateOrConnectWithoutMaterialInput>;

	@Field(() => IngredientCreateManyMaterialInputEnvelope, { nullable: true })
	@Type(() => IngredientCreateManyMaterialInputEnvelope)
	createMany?: IngredientCreateManyMaterialInputEnvelope;

	@Field(() => [IngredientWhereUniqueInput], { nullable: true })
	@Type(() => IngredientWhereUniqueInput)
	connect?: Array<Prisma.AtLeast<IngredientWhereUniqueInput, 'id'>>;
}
