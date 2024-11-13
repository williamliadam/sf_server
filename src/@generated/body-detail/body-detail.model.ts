import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';

@ObjectType()
export class BodyDetail {
	@Field(() => ID, { nullable: false })
	id!: number;

	@Field(() => Int, { nullable: true })
	weight!: number | null;

	@Field(() => Int, { nullable: true })
	height!: number | null;

	@Field(() => Int, { nullable: true })
	age!: number | null;

	@Field(() => Int, { nullable: true })
	bmi!: number | null;

	@Field(() => Int, { nullable: true })
	bmr!: number | null;

	@Field(() => Int, { nullable: true })
	tdee!: number | null;

	@Field(() => Int, { nullable: false })
	userId!: number;

	@Field(() => Date, { nullable: false })
	createdAt!: Date;

	@Field(() => Date, { nullable: false })
	updatedAt!: Date;

	@Field(() => User, { nullable: false })
	user?: User;
}
