import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DishTemplateCreateWithoutUsedMealTemplatesInput } from './dish-template-create-without-used-meal-templates.input';
import { Type } from 'class-transformer';
import { DishTemplateCreateOrConnectWithoutUsedMealTemplatesInput } from './dish-template-create-or-connect-without-used-meal-templates.input';
import { DishTemplateCreateManyUsedMealTemplatesInputEnvelope } from './dish-template-create-many-used-meal-templates-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DishTemplateWhereUniqueInput } from './dish-template-where-unique.input';

@InputType()
export class DishTemplateUncheckedCreateNestedManyWithoutUsedMealTemplatesInput {
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

	@Field(() => DishTemplateCreateManyUsedMealTemplatesInputEnvelope, {
		nullable: true,
	})
	@Type(() => DishTemplateCreateManyUsedMealTemplatesInputEnvelope)
	createMany?: DishTemplateCreateManyUsedMealTemplatesInputEnvelope;

	@Field(() => [DishTemplateWhereUniqueInput], { nullable: true })
	@Type(() => DishTemplateWhereUniqueInput)
	connect?: Array<Prisma.AtLeast<DishTemplateWhereUniqueInput, 'id'>>;
}
