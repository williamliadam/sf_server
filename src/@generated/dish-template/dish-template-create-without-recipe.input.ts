import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MealTemplateCreateNestedOneWithoutDishTemplatesInput } from '../meal-template/meal-template-create-nested-one-without-dish-templates.input';

@InputType()
export class DishTemplateCreateWithoutRecipeInput {
	@Field(() => Int, { nullable: false })
	amount!: number;

	@Field(() => Date, { nullable: true })
	createdAt?: Date | string;

	@Field(() => Date, { nullable: true })
	updatedAt?: Date | string;

	@Field(() => MealTemplateCreateNestedOneWithoutDishTemplatesInput, {
		nullable: true,
	})
	usedMealTemplates?: MealTemplateCreateNestedOneWithoutDishTemplatesInput;
}
