import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class IngredientAvgAggregate {
	@Field(() => Float, { nullable: true })
	id?: number;

	@Field(() => Float, { nullable: true })
	materialId?: number;

	@Field(() => Float, { nullable: true })
	amount?: number;

	@Field(() => Float, { nullable: true })
	materiaUnitId?: number;

	@Field(() => Float, { nullable: true })
	recipeId?: number;
}
