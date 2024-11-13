import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class IngredientMinAggregate {
	@Field(() => Int, { nullable: true })
	id?: number;

	@Field(() => Int, { nullable: true })
	materialId?: number;

	@Field(() => Int, { nullable: true })
	amount?: number;

	@Field(() => Int, { nullable: true })
	materiaUnitId?: number;

	@Field(() => Int, { nullable: true })
	recipeId?: number;

	@Field(() => Date, { nullable: true })
	createdAt?: Date | string;

	@Field(() => Date, { nullable: true })
	updatedAt?: Date | string;
}
