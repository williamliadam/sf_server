import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCreateWithoutMethodsInput } from './recipe-create-without-methods.input';
import { Type } from 'class-transformer';
import { RecipeCreateOrConnectWithoutMethodsInput } from './recipe-create-or-connect-without-methods.input';
import { RecipeUpsertWithoutMethodsInput } from './recipe-upsert-without-methods.input';
import { RecipeWhereInput } from './recipe-where.input';
import { Prisma } from '@prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { RecipeUpdateToOneWithWhereWithoutMethodsInput } from './recipe-update-to-one-with-where-without-methods.input';

@InputType()
export class RecipeUpdateOneWithoutMethodsNestedInput {
	@Field(() => RecipeCreateWithoutMethodsInput, { nullable: true })
	@Type(() => RecipeCreateWithoutMethodsInput)
	create?: RecipeCreateWithoutMethodsInput;

	@Field(() => RecipeCreateOrConnectWithoutMethodsInput, { nullable: true })
	@Type(() => RecipeCreateOrConnectWithoutMethodsInput)
	connectOrCreate?: RecipeCreateOrConnectWithoutMethodsInput;

	@Field(() => RecipeUpsertWithoutMethodsInput, { nullable: true })
	@Type(() => RecipeUpsertWithoutMethodsInput)
	upsert?: RecipeUpsertWithoutMethodsInput;

	@Field(() => RecipeWhereInput, { nullable: true })
	@Type(() => RecipeWhereInput)
	disconnect?: RecipeWhereInput;

	@Field(() => RecipeWhereInput, { nullable: true })
	@Type(() => RecipeWhereInput)
	delete?: RecipeWhereInput;

	@Field(() => RecipeWhereUniqueInput, { nullable: true })
	@Type(() => RecipeWhereUniqueInput)
	connect?: Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>;

	@Field(() => RecipeUpdateToOneWithWhereWithoutMethodsInput, {
		nullable: true,
	})
	@Type(() => RecipeUpdateToOneWithWhereWithoutMethodsInput)
	update?: RecipeUpdateToOneWithWhereWithoutMethodsInput;
}
