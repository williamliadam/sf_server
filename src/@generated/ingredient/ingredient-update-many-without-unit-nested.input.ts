import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IngredientCreateWithoutUnitInput } from './ingredient-create-without-unit.input';
import { Type } from 'class-transformer';
import { IngredientCreateOrConnectWithoutUnitInput } from './ingredient-create-or-connect-without-unit.input';
import { IngredientUpsertWithWhereUniqueWithoutUnitInput } from './ingredient-upsert-with-where-unique-without-unit.input';
import { IngredientCreateManyUnitInputEnvelope } from './ingredient-create-many-unit-input-envelope.input';
import { Prisma } from '@prisma/client';
import { IngredientWhereUniqueInput } from './ingredient-where-unique.input';
import { IngredientUpdateWithWhereUniqueWithoutUnitInput } from './ingredient-update-with-where-unique-without-unit.input';
import { IngredientUpdateManyWithWhereWithoutUnitInput } from './ingredient-update-many-with-where-without-unit.input';
import { IngredientScalarWhereInput } from './ingredient-scalar-where.input';

@InputType()
export class IngredientUpdateManyWithoutUnitNestedInput {
	@Field(() => [IngredientCreateWithoutUnitInput], { nullable: true })
	@Type(() => IngredientCreateWithoutUnitInput)
	create?: Array<IngredientCreateWithoutUnitInput>;

	@Field(() => [IngredientCreateOrConnectWithoutUnitInput], { nullable: true })
	@Type(() => IngredientCreateOrConnectWithoutUnitInput)
	connectOrCreate?: Array<IngredientCreateOrConnectWithoutUnitInput>;

	@Field(() => [IngredientUpsertWithWhereUniqueWithoutUnitInput], {
		nullable: true,
	})
	@Type(() => IngredientUpsertWithWhereUniqueWithoutUnitInput)
	upsert?: Array<IngredientUpsertWithWhereUniqueWithoutUnitInput>;

	@Field(() => IngredientCreateManyUnitInputEnvelope, { nullable: true })
	@Type(() => IngredientCreateManyUnitInputEnvelope)
	createMany?: IngredientCreateManyUnitInputEnvelope;

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

	@Field(() => [IngredientUpdateWithWhereUniqueWithoutUnitInput], {
		nullable: true,
	})
	@Type(() => IngredientUpdateWithWhereUniqueWithoutUnitInput)
	update?: Array<IngredientUpdateWithWhereUniqueWithoutUnitInput>;

	@Field(() => [IngredientUpdateManyWithWhereWithoutUnitInput], {
		nullable: true,
	})
	@Type(() => IngredientUpdateManyWithWhereWithoutUnitInput)
	updateMany?: Array<IngredientUpdateManyWithWhereWithoutUnitInput>;

	@Field(() => [IngredientScalarWhereInput], { nullable: true })
	@Type(() => IngredientScalarWhereInput)
	deleteMany?: Array<IngredientScalarWhereInput>;
}
