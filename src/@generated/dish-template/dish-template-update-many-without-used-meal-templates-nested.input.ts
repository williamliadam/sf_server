import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DishTemplateCreateWithoutUsedMealTemplatesInput } from './dish-template-create-without-used-meal-templates.input';
import { Type } from 'class-transformer';
import { DishTemplateCreateOrConnectWithoutUsedMealTemplatesInput } from './dish-template-create-or-connect-without-used-meal-templates.input';
import { DishTemplateUpsertWithWhereUniqueWithoutUsedMealTemplatesInput } from './dish-template-upsert-with-where-unique-without-used-meal-templates.input';
import { DishTemplateCreateManyUsedMealTemplatesInputEnvelope } from './dish-template-create-many-used-meal-templates-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DishTemplateWhereUniqueInput } from './dish-template-where-unique.input';
import { DishTemplateUpdateWithWhereUniqueWithoutUsedMealTemplatesInput } from './dish-template-update-with-where-unique-without-used-meal-templates.input';
import { DishTemplateUpdateManyWithWhereWithoutUsedMealTemplatesInput } from './dish-template-update-many-with-where-without-used-meal-templates.input';
import { DishTemplateScalarWhereInput } from './dish-template-scalar-where.input';

@InputType()
export class DishTemplateUpdateManyWithoutUsedMealTemplatesNestedInput {
	@Field(() => [DishTemplateCreateWithoutUsedMealTemplatesInput], {
		nullable: true,
	})
	@Type(() => DishTemplateCreateWithoutUsedMealTemplatesInput)
	create?: Array<DishTemplateCreateWithoutUsedMealTemplatesInput>;

	@Field(() => [DishTemplateCreateOrConnectWithoutUsedMealTemplatesInput], {
		nullable: true,
	})
	@Type(() => DishTemplateCreateOrConnectWithoutUsedMealTemplatesInput)
	connectOrCreate?: Array<DishTemplateCreateOrConnectWithoutUsedMealTemplatesInput>;

	@Field(
		() => [DishTemplateUpsertWithWhereUniqueWithoutUsedMealTemplatesInput],
		{ nullable: true },
	)
	@Type(() => DishTemplateUpsertWithWhereUniqueWithoutUsedMealTemplatesInput)
	upsert?: Array<DishTemplateUpsertWithWhereUniqueWithoutUsedMealTemplatesInput>;

	@Field(() => DishTemplateCreateManyUsedMealTemplatesInputEnvelope, {
		nullable: true,
	})
	@Type(() => DishTemplateCreateManyUsedMealTemplatesInputEnvelope)
	createMany?: DishTemplateCreateManyUsedMealTemplatesInputEnvelope;

	@Field(() => [DishTemplateWhereUniqueInput], { nullable: true })
	@Type(() => DishTemplateWhereUniqueInput)
	set?: Array<Prisma.AtLeast<DishTemplateWhereUniqueInput, 'id'>>;

	@Field(() => [DishTemplateWhereUniqueInput], { nullable: true })
	@Type(() => DishTemplateWhereUniqueInput)
	disconnect?: Array<Prisma.AtLeast<DishTemplateWhereUniqueInput, 'id'>>;

	@Field(() => [DishTemplateWhereUniqueInput], { nullable: true })
	@Type(() => DishTemplateWhereUniqueInput)
	delete?: Array<Prisma.AtLeast<DishTemplateWhereUniqueInput, 'id'>>;

	@Field(() => [DishTemplateWhereUniqueInput], { nullable: true })
	@Type(() => DishTemplateWhereUniqueInput)
	connect?: Array<Prisma.AtLeast<DishTemplateWhereUniqueInput, 'id'>>;

	@Field(
		() => [DishTemplateUpdateWithWhereUniqueWithoutUsedMealTemplatesInput],
		{ nullable: true },
	)
	@Type(() => DishTemplateUpdateWithWhereUniqueWithoutUsedMealTemplatesInput)
	update?: Array<DishTemplateUpdateWithWhereUniqueWithoutUsedMealTemplatesInput>;

	@Field(() => [DishTemplateUpdateManyWithWhereWithoutUsedMealTemplatesInput], {
		nullable: true,
	})
	@Type(() => DishTemplateUpdateManyWithWhereWithoutUsedMealTemplatesInput)
	updateMany?: Array<DishTemplateUpdateManyWithWhereWithoutUsedMealTemplatesInput>;

	@Field(() => [DishTemplateScalarWhereInput], { nullable: true })
	@Type(() => DishTemplateScalarWhereInput)
	deleteMany?: Array<DishTemplateScalarWhereInput>;
}
