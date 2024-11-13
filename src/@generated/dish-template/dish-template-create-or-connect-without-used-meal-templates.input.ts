import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DishTemplateWhereUniqueInput } from './dish-template-where-unique.input';
import { Type } from 'class-transformer';
import { DishTemplateCreateWithoutUsedMealTemplatesInput } from './dish-template-create-without-used-meal-templates.input';

@InputType()
export class DishTemplateCreateOrConnectWithoutUsedMealTemplatesInput {
	@Field(() => DishTemplateWhereUniqueInput, { nullable: false })
	@Type(() => DishTemplateWhereUniqueInput)
	where!: Prisma.AtLeast<DishTemplateWhereUniqueInput, 'id'>;

	@Field(() => DishTemplateCreateWithoutUsedMealTemplatesInput, {
		nullable: false,
	})
	@Type(() => DishTemplateCreateWithoutUsedMealTemplatesInput)
	create!: DishTemplateCreateWithoutUsedMealTemplatesInput;
}
