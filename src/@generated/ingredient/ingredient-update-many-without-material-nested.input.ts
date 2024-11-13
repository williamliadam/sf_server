import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IngredientCreateWithoutMaterialInput } from './ingredient-create-without-material.input';
import { Type } from 'class-transformer';
import { IngredientCreateOrConnectWithoutMaterialInput } from './ingredient-create-or-connect-without-material.input';
import { IngredientUpsertWithWhereUniqueWithoutMaterialInput } from './ingredient-upsert-with-where-unique-without-material.input';
import { IngredientCreateManyMaterialInputEnvelope } from './ingredient-create-many-material-input-envelope.input';
import { Prisma } from '@prisma/client';
import { IngredientWhereUniqueInput } from './ingredient-where-unique.input';
import { IngredientUpdateWithWhereUniqueWithoutMaterialInput } from './ingredient-update-with-where-unique-without-material.input';
import { IngredientUpdateManyWithWhereWithoutMaterialInput } from './ingredient-update-many-with-where-without-material.input';
import { IngredientScalarWhereInput } from './ingredient-scalar-where.input';

@InputType()
export class IngredientUpdateManyWithoutMaterialNestedInput {
	@Field(() => [IngredientCreateWithoutMaterialInput], { nullable: true })
	@Type(() => IngredientCreateWithoutMaterialInput)
	create?: Array<IngredientCreateWithoutMaterialInput>;

	@Field(() => [IngredientCreateOrConnectWithoutMaterialInput], {
		nullable: true,
	})
	@Type(() => IngredientCreateOrConnectWithoutMaterialInput)
	connectOrCreate?: Array<IngredientCreateOrConnectWithoutMaterialInput>;

	@Field(() => [IngredientUpsertWithWhereUniqueWithoutMaterialInput], {
		nullable: true,
	})
	@Type(() => IngredientUpsertWithWhereUniqueWithoutMaterialInput)
	upsert?: Array<IngredientUpsertWithWhereUniqueWithoutMaterialInput>;

	@Field(() => IngredientCreateManyMaterialInputEnvelope, { nullable: true })
	@Type(() => IngredientCreateManyMaterialInputEnvelope)
	createMany?: IngredientCreateManyMaterialInputEnvelope;

	@Field(() => [IngredientWhereUniqueInput], { nullable: true })
	@Type(() => IngredientWhereUniqueInput)
	set?: Array<Prisma.AtLeast<IngredientWhereUniqueInput, 'id'>>;

	@Field(() => [IngredientWhereUniqueInput], { nullable: true })
	@Type(() => IngredientWhereUniqueInput)
	disconnect?: Array<Prisma.AtLeast<IngredientWhereUniqueInput, 'id'>>;

	@Field(() => [IngredientWhereUniqueInput], { nullable: true })
	@Type(() => IngredientWhereUniqueInput)
	delete?: Array<Prisma.AtLeast<IngredientWhereUniqueInput, 'id'>>;

	@Field(() => [IngredientWhereUniqueInput], { nullable: true })
	@Type(() => IngredientWhereUniqueInput)
	connect?: Array<Prisma.AtLeast<IngredientWhereUniqueInput, 'id'>>;

	@Field(() => [IngredientUpdateWithWhereUniqueWithoutMaterialInput], {
		nullable: true,
	})
	@Type(() => IngredientUpdateWithWhereUniqueWithoutMaterialInput)
	update?: Array<IngredientUpdateWithWhereUniqueWithoutMaterialInput>;

	@Field(() => [IngredientUpdateManyWithWhereWithoutMaterialInput], {
		nullable: true,
	})
	@Type(() => IngredientUpdateManyWithWhereWithoutMaterialInput)
	updateMany?: Array<IngredientUpdateManyWithWhereWithoutMaterialInput>;

	@Field(() => [IngredientScalarWhereInput], { nullable: true })
	@Type(() => IngredientScalarWhereInput)
	deleteMany?: Array<IngredientScalarWhereInput>;
}
