import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MethodScalarWhereInput } from './method-scalar-where.input';
import { Type } from 'class-transformer';
import { MethodUpdateManyMutationInput } from './method-update-many-mutation.input';

@InputType()
export class MethodUpdateManyWithWhereWithoutUsedRecipeInput {
	@Field(() => MethodScalarWhereInput, { nullable: false })
	@Type(() => MethodScalarWhereInput)
	where!: MethodScalarWhereInput;

	@Field(() => MethodUpdateManyMutationInput, { nullable: false })
	@Type(() => MethodUpdateManyMutationInput)
	data!: MethodUpdateManyMutationInput;
}
