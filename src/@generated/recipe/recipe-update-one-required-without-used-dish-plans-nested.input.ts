import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCreateWithoutUsedDishPlansInput } from './recipe-create-without-used-dish-plans.input';
import { Type } from 'class-transformer';
import { RecipeCreateOrConnectWithoutUsedDishPlansInput } from './recipe-create-or-connect-without-used-dish-plans.input';
import { RecipeUpsertWithoutUsedDishPlansInput } from './recipe-upsert-without-used-dish-plans.input';
import { Prisma } from '@prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { RecipeUpdateToOneWithWhereWithoutUsedDishPlansInput } from './recipe-update-to-one-with-where-without-used-dish-plans.input';

@InputType()
export class RecipeUpdateOneRequiredWithoutUsedDishPlansNestedInput {
	@Field(() => RecipeCreateWithoutUsedDishPlansInput, { nullable: true })
	@Type(() => RecipeCreateWithoutUsedDishPlansInput)
	create?: RecipeCreateWithoutUsedDishPlansInput;

	@Field(() => RecipeCreateOrConnectWithoutUsedDishPlansInput, {
		nullable: true,
	})
	@Type(() => RecipeCreateOrConnectWithoutUsedDishPlansInput)
	connectOrCreate?: RecipeCreateOrConnectWithoutUsedDishPlansInput;

	@Field(() => RecipeUpsertWithoutUsedDishPlansInput, { nullable: true })
	@Type(() => RecipeUpsertWithoutUsedDishPlansInput)
	upsert?: RecipeUpsertWithoutUsedDishPlansInput;

	@Field(() => RecipeWhereUniqueInput, { nullable: true })
	@Type(() => RecipeWhereUniqueInput)
	connect?: Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>;

	@Field(() => RecipeUpdateToOneWithWhereWithoutUsedDishPlansInput, {
		nullable: true,
	})
	@Type(() => RecipeUpdateToOneWithWhereWithoutUsedDishPlansInput)
	update?: RecipeUpdateToOneWithWhereWithoutUsedDishPlansInput;
}
