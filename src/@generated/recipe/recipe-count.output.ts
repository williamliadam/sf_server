import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class RecipeCount {
	@Field(() => Int, { nullable: false })
	ingredients?: number;

	@Field(() => Int, { nullable: false })
	methods?: number;

	@Field(() => Int, { nullable: false })
	usedDishPlans?: number;

	@Field(() => Int, { nullable: false })
	usedDishTemplates?: number;
}
