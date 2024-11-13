import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MealTemplateCreateWithoutDishTemplatesInput } from './meal-template-create-without-dish-templates.input';
import { Type } from 'class-transformer';
import { MealTemplateCreateOrConnectWithoutDishTemplatesInput } from './meal-template-create-or-connect-without-dish-templates.input';
import { Prisma } from '@prisma/client';
import { MealTemplateWhereUniqueInput } from './meal-template-where-unique.input';

@InputType()
export class MealTemplateCreateNestedOneWithoutDishTemplatesInput {
	@Field(() => MealTemplateCreateWithoutDishTemplatesInput, { nullable: true })
	@Type(() => MealTemplateCreateWithoutDishTemplatesInput)
	create?: MealTemplateCreateWithoutDishTemplatesInput;

	@Field(() => MealTemplateCreateOrConnectWithoutDishTemplatesInput, {
		nullable: true,
	})
	@Type(() => MealTemplateCreateOrConnectWithoutDishTemplatesInput)
	connectOrCreate?: MealTemplateCreateOrConnectWithoutDishTemplatesInput;

	@Field(() => MealTemplateWhereUniqueInput, { nullable: true })
	@Type(() => MealTemplateWhereUniqueInput)
	connect?: Prisma.AtLeast<MealTemplateWhereUniqueInput, 'id'>;
}
