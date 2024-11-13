import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeUpdateWithoutUsedDishTemplatesInput } from './recipe-update-without-used-dish-templates.input';
import { Type } from 'class-transformer';
import { RecipeCreateWithoutUsedDishTemplatesInput } from './recipe-create-without-used-dish-templates.input';
import { RecipeWhereInput } from './recipe-where.input';

@InputType()
export class RecipeUpsertWithoutUsedDishTemplatesInput {
	@Field(() => RecipeUpdateWithoutUsedDishTemplatesInput, { nullable: false })
	@Type(() => RecipeUpdateWithoutUsedDishTemplatesInput)
	update!: RecipeUpdateWithoutUsedDishTemplatesInput;

	@Field(() => RecipeCreateWithoutUsedDishTemplatesInput, { nullable: false })
	@Type(() => RecipeCreateWithoutUsedDishTemplatesInput)
	create!: RecipeCreateWithoutUsedDishTemplatesInput;

	@Field(() => RecipeWhereInput, { nullable: true })
	@Type(() => RecipeWhereInput)
	where?: RecipeWhereInput;
}
