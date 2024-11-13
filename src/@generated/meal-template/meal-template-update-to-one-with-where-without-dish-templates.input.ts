import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MealTemplateWhereInput } from './meal-template-where.input';
import { Type } from 'class-transformer';
import { MealTemplateUpdateWithoutDishTemplatesInput } from './meal-template-update-without-dish-templates.input';

@InputType()
export class MealTemplateUpdateToOneWithWhereWithoutDishTemplatesInput {
	@Field(() => MealTemplateWhereInput, { nullable: true })
	@Type(() => MealTemplateWhereInput)
	where?: MealTemplateWhereInput;

	@Field(() => MealTemplateUpdateWithoutDishTemplatesInput, { nullable: false })
	@Type(() => MealTemplateUpdateWithoutDishTemplatesInput)
	data!: MealTemplateUpdateWithoutDishTemplatesInput;
}
