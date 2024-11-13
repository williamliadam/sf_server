import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MethodCreateInput } from './method-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneMethodArgs {
	@Field(() => MethodCreateInput, { nullable: false })
	@Type(() => MethodCreateInput)
	data!: MethodCreateInput;
}
