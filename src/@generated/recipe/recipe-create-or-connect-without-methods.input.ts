import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeCreateWithoutMethodsInput } from './recipe-create-without-methods.input';

@InputType()
export class RecipeCreateOrConnectWithoutMethodsInput {
	@Field(() => RecipeWhereUniqueInput, { nullable: false })
	@Type(() => RecipeWhereUniqueInput)
	where!: Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>;

	@Field(() => RecipeCreateWithoutMethodsInput, { nullable: false })
	@Type(() => RecipeCreateWithoutMethodsInput)
	create!: RecipeCreateWithoutMethodsInput;
}
