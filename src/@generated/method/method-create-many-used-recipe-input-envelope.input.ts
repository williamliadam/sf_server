import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MethodCreateManyUsedRecipeInput } from './method-create-many-used-recipe.input';
import { Type } from 'class-transformer';

@InputType()
export class MethodCreateManyUsedRecipeInputEnvelope {
	@Field(() => [MethodCreateManyUsedRecipeInput], { nullable: false })
	@Type(() => MethodCreateManyUsedRecipeInput)
	data!: Array<MethodCreateManyUsedRecipeInput>;

	@Field(() => Boolean, { nullable: true })
	skipDuplicates?: boolean;
}
