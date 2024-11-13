import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MethodCreateWithoutUsedRecipeInput } from './method-create-without-used-recipe.input';
import { Type } from 'class-transformer';
import { MethodCreateOrConnectWithoutUsedRecipeInput } from './method-create-or-connect-without-used-recipe.input';
import { MethodCreateManyUsedRecipeInputEnvelope } from './method-create-many-used-recipe-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MethodWhereUniqueInput } from './method-where-unique.input';

@InputType()
export class MethodCreateNestedManyWithoutUsedRecipeInput {
	@Field(() => [MethodCreateWithoutUsedRecipeInput], { nullable: true })
	@Type(() => MethodCreateWithoutUsedRecipeInput)
	create?: Array<MethodCreateWithoutUsedRecipeInput>;

	@Field(() => [MethodCreateOrConnectWithoutUsedRecipeInput], {
		nullable: true,
	})
	@Type(() => MethodCreateOrConnectWithoutUsedRecipeInput)
	connectOrCreate?: Array<MethodCreateOrConnectWithoutUsedRecipeInput>;

	@Field(() => MethodCreateManyUsedRecipeInputEnvelope, { nullable: true })
	@Type(() => MethodCreateManyUsedRecipeInputEnvelope)
	createMany?: MethodCreateManyUsedRecipeInputEnvelope;

	@Field(() => [MethodWhereUniqueInput], { nullable: true })
	@Type(() => MethodWhereUniqueInput)
	connect?: Array<Prisma.AtLeast<MethodWhereUniqueInput, 'id' | 'code'>>;
}
