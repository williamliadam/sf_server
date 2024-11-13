import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MethodWhereUniqueInput } from './method-where-unique.input';
import { Type } from 'class-transformer';
import { MethodUpdateWithoutUsedRecipeInput } from './method-update-without-used-recipe.input';
import { MethodCreateWithoutUsedRecipeInput } from './method-create-without-used-recipe.input';

@InputType()
export class MethodUpsertWithWhereUniqueWithoutUsedRecipeInput {
	@Field(() => MethodWhereUniqueInput, { nullable: false })
	@Type(() => MethodWhereUniqueInput)
	where!: Prisma.AtLeast<MethodWhereUniqueInput, 'id' | 'code'>;

	@Field(() => MethodUpdateWithoutUsedRecipeInput, { nullable: false })
	@Type(() => MethodUpdateWithoutUsedRecipeInput)
	update!: MethodUpdateWithoutUsedRecipeInput;

	@Field(() => MethodCreateWithoutUsedRecipeInput, { nullable: false })
	@Type(() => MethodCreateWithoutUsedRecipeInput)
	create!: MethodCreateWithoutUsedRecipeInput;
}
