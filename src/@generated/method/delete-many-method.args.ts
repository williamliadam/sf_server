import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MethodWhereInput } from './method-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyMethodArgs {
	@Field(() => MethodWhereInput, { nullable: true })
	@Type(() => MethodWhereInput)
	where?: MethodWhereInput;
}
