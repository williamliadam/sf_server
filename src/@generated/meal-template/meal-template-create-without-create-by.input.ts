import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DishTemplateCreateNestedManyWithoutUsedMealTemplatesInput } from '../dish-template/dish-template-create-nested-many-without-used-meal-templates.input';

@InputType()
export class MealTemplateCreateWithoutCreateByInput {
	@Field(() => String, { nullable: false })
	name!: string;

	@Field(() => Date, { nullable: true })
	createdAt?: Date | string;

	@Field(() => Date, { nullable: true })
	updatedAt?: Date | string;

	@Field(() => DishTemplateCreateNestedManyWithoutUsedMealTemplatesInput, {
		nullable: true,
	})
	dishTemplates?: DishTemplateCreateNestedManyWithoutUsedMealTemplatesInput;
}
