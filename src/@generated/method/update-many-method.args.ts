import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MethodUpdateManyMutationInput } from './method-update-many-mutation.input';
import { Type } from 'class-transformer';
import { MethodWhereInput } from './method-where.input';

@ArgsType()
export class UpdateManyMethodArgs {
	@Field(() => MethodUpdateManyMutationInput, { nullable: false })
	@Type(() => MethodUpdateManyMutationInput)
	data!: MethodUpdateManyMutationInput;

	@Field(() => MethodWhereInput, { nullable: true })
	@Type(() => MethodWhereInput)
	where?: MethodWhereInput;
}
