import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class MateriaCategoryCreateManyInput {
	@Field(() => Int, { nullable: true })
	id?: number;

	@Field(() => String, { nullable: false })
	code!: string;

	@Field(() => String, { nullable: false })
	name!: string;

	@Field(() => Int, { nullable: true })
	lastId?: number;

	@Field(() => Date, { nullable: true })
	createdAt?: Date | string;

	@Field(() => Date, { nullable: true })
	updatedAt?: Date | string;
}
