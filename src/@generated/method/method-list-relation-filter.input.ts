import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MethodWhereInput } from './method-where.input';

@InputType()
export class MethodListRelationFilter {
	@Field(() => MethodWhereInput, { nullable: true })
	every?: MethodWhereInput;

	@Field(() => MethodWhereInput, { nullable: true })
	some?: MethodWhereInput;

	@Field(() => MethodWhereInput, { nullable: true })
	none?: MethodWhereInput;
}
