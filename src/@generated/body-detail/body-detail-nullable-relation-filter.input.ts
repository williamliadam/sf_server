import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BodyDetailWhereInput } from './body-detail-where.input';

@InputType()
export class BodyDetailNullableRelationFilter {
	@Field(() => BodyDetailWhereInput, { nullable: true })
	is?: BodyDetailWhereInput;

	@Field(() => BodyDetailWhereInput, { nullable: true })
	isNot?: BodyDetailWhereInput;
}
