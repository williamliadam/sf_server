import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MealTemplateUpdateWithoutDishTemplatesInput } from './meal-template-update-without-dish-templates.input';
import { Type } from 'class-transformer';
import { MealTemplateCreateWithoutDishTemplatesInput } from './meal-template-create-without-dish-templates.input';
import { MealTemplateWhereInput } from './meal-template-where.input';

@InputType()
export class MealTemplateUpsertWithoutDishTemplatesInput {
	@Field(() => MealTemplateUpdateWithoutDishTemplatesInput, { nullable: false })
	@Type(() => MealTemplateUpdateWithoutDishTemplatesInput)
	update!: MealTemplateUpdateWithoutDishTemplatesInput;

	@Field(() => MealTemplateCreateWithoutDishTemplatesInput, { nullable: false })
	@Type(() => MealTemplateCreateWithoutDishTemplatesInput)
	create!: MealTemplateCreateWithoutDishTemplatesInput;

	@Field(() => MealTemplateWhereInput, { nullable: true })
	@Type(() => MealTemplateWhereInput)
	where?: MealTemplateWhereInput;
}
