import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutMyMealTemplatesInput } from '../user/user-create-nested-one-without-my-meal-templates.input';
import { DishTemplateCreateNestedManyWithoutUsedMealTemplatesInput } from '../dish-template/dish-template-create-nested-many-without-used-meal-templates.input';

@InputType()
export class MealTemplateCreateInput {
	@Field(() => String, { nullable: false })
	name!: string;

	@Field(() => Date, { nullable: true })
	createdAt?: Date | string;

	@Field(() => Date, { nullable: true })
	updatedAt?: Date | string;

	@Field(() => UserCreateNestedOneWithoutMyMealTemplatesInput, {
		nullable: false,
	})
	createBy!: UserCreateNestedOneWithoutMyMealTemplatesInput;

	@Field(() => DishTemplateCreateNestedManyWithoutUsedMealTemplatesInput, {
		nullable: true,
	})
	dishTemplates?: DishTemplateCreateNestedManyWithoutUsedMealTemplatesInput;
}
