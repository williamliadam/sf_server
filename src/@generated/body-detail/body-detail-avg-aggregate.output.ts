import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class BodyDetailAvgAggregate {
	@Field(() => Float, { nullable: true })
	id?: number;

	@Field(() => Float, { nullable: true })
	weight?: number;

	@Field(() => Float, { nullable: true })
	height?: number;

	@Field(() => Float, { nullable: true })
	age?: number;

	@Field(() => Float, { nullable: true })
	bmi?: number;

	@Field(() => Float, { nullable: true })
	bmr?: number;

	@Field(() => Float, { nullable: true })
	tdee?: number;

	@Field(() => Float, { nullable: true })
	userId?: number;
}
