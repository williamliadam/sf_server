import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCreateWithoutUsedDishTemplatesInput } from './recipe-create-without-used-dish-templates.input';
import { Type } from 'class-transformer';
import { RecipeCreateOrConnectWithoutUsedDishTemplatesInput } from './recipe-create-or-connect-without-used-dish-templates.input';
import { RecipeUpsertWithoutUsedDishTemplatesInput } from './recipe-upsert-without-used-dish-templates.input';
import { Prisma } from '@prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { RecipeUpdateToOneWithWhereWithoutUsedDishTemplatesInput } from './recipe-update-to-one-with-where-without-used-dish-templates.input';

@InputType()
export class RecipeUpdateOneRequiredWithoutUsedDishTemplatesNestedInput {
	@Field(() => RecipeCreateWithoutUsedDishTemplatesInput, { nullable: true })
	@Type(() => RecipeCreateWithoutUsedDishTemplatesInput)
	create?: RecipeCreateWithoutUsedDishTemplatesInput;

	@Field(() => RecipeCreateOrConnectWithoutUsedDishTemplatesInput, {
		nullable: true,
	})
	@Type(() => RecipeCreateOrConnectWithoutUsedDishTemplatesInput)
	connectOrCreate?: RecipeCreateOrConnectWithoutUsedDishTemplatesInput;

	@Field(() => RecipeUpsertWithoutUsedDishTemplatesInput, { nullable: true })
	@Type(() => RecipeUpsertWithoutUsedDishTemplatesInput)
	upsert?: RecipeUpsertWithoutUsedDishTemplatesInput;

	@Field(() => RecipeWhereUniqueInput, { nullable: true })
	@Type(() => RecipeWhereUniqueInput)
	connect?: Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>;

	@Field(() => RecipeUpdateToOneWithWhereWithoutUsedDishTemplatesInput, {
		nullable: true,
	})
	@Type(() => RecipeUpdateToOneWithWhereWithoutUsedDishTemplatesInput)
	update?: RecipeUpdateToOneWithWhereWithoutUsedDishTemplatesInput;
}
