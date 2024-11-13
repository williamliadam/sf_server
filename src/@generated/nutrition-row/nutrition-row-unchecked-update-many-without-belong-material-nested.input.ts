import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionRowCreateWithoutBelongMaterialInput } from './nutrition-row-create-without-belong-material.input';
import { Type } from 'class-transformer';
import { NutritionRowCreateOrConnectWithoutBelongMaterialInput } from './nutrition-row-create-or-connect-without-belong-material.input';
import { NutritionRowUpsertWithWhereUniqueWithoutBelongMaterialInput } from './nutrition-row-upsert-with-where-unique-without-belong-material.input';
import { NutritionRowCreateManyBelongMaterialInputEnvelope } from './nutrition-row-create-many-belong-material-input-envelope.input';
import { Prisma } from '@prisma/client';
import { NutritionRowWhereUniqueInput } from './nutrition-row-where-unique.input';
import { NutritionRowUpdateWithWhereUniqueWithoutBelongMaterialInput } from './nutrition-row-update-with-where-unique-without-belong-material.input';
import { NutritionRowUpdateManyWithWhereWithoutBelongMaterialInput } from './nutrition-row-update-many-with-where-without-belong-material.input';
import { NutritionRowScalarWhereInput } from './nutrition-row-scalar-where.input';

@InputType()
export class NutritionRowUncheckedUpdateManyWithoutBelongMaterialNestedInput {
	@Field(() => [NutritionRowCreateWithoutBelongMaterialInput], {
		nullable: true,
	})
	@Type(() => NutritionRowCreateWithoutBelongMaterialInput)
	create?: Array<NutritionRowCreateWithoutBelongMaterialInput>;

	@Field(() => [NutritionRowCreateOrConnectWithoutBelongMaterialInput], {
		nullable: true,
	})
	@Type(() => NutritionRowCreateOrConnectWithoutBelongMaterialInput)
	connectOrCreate?: Array<NutritionRowCreateOrConnectWithoutBelongMaterialInput>;

	@Field(() => [NutritionRowUpsertWithWhereUniqueWithoutBelongMaterialInput], {
		nullable: true,
	})
	@Type(() => NutritionRowUpsertWithWhereUniqueWithoutBelongMaterialInput)
	upsert?: Array<NutritionRowUpsertWithWhereUniqueWithoutBelongMaterialInput>;

	@Field(() => NutritionRowCreateManyBelongMaterialInputEnvelope, {
		nullable: true,
	})
	@Type(() => NutritionRowCreateManyBelongMaterialInputEnvelope)
	createMany?: NutritionRowCreateManyBelongMaterialInputEnvelope;

	@Field(() => [NutritionRowWhereUniqueInput], { nullable: true })
	@Type(() => NutritionRowWhereUniqueInput)
	set?: Array<Prisma.AtLeast<NutritionRowWhereUniqueInput, 'id'>>;

	@Field(() => [NutritionRowWhereUniqueInput], { nullable: true })
	@Type(() => NutritionRowWhereUniqueInput)
	disconnect?: Array<Prisma.AtLeast<NutritionRowWhereUniqueInput, 'id'>>;

	@Field(() => [NutritionRowWhereUniqueInput], { nullable: true })
	@Type(() => NutritionRowWhereUniqueInput)
	delete?: Array<Prisma.AtLeast<NutritionRowWhereUniqueInput, 'id'>>;

	@Field(() => [NutritionRowWhereUniqueInput], { nullable: true })
	@Type(() => NutritionRowWhereUniqueInput)
	connect?: Array<Prisma.AtLeast<NutritionRowWhereUniqueInput, 'id'>>;

	@Field(() => [NutritionRowUpdateWithWhereUniqueWithoutBelongMaterialInput], {
		nullable: true,
	})
	@Type(() => NutritionRowUpdateWithWhereUniqueWithoutBelongMaterialInput)
	update?: Array<NutritionRowUpdateWithWhereUniqueWithoutBelongMaterialInput>;

	@Field(() => [NutritionRowUpdateManyWithWhereWithoutBelongMaterialInput], {
		nullable: true,
	})
	@Type(() => NutritionRowUpdateManyWithWhereWithoutBelongMaterialInput)
	updateMany?: Array<NutritionRowUpdateManyWithWhereWithoutBelongMaterialInput>;

	@Field(() => [NutritionRowScalarWhereInput], { nullable: true })
	@Type(() => NutritionRowScalarWhereInput)
	deleteMany?: Array<NutritionRowScalarWhereInput>;
}
