import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserCount {
	@Field(() => Int, { nullable: false })
	myPosts?: number;

	@Field(() => Int, { nullable: false })
	myRecipes?: number;

	@Field(() => Int, { nullable: false })
	myMealTemplates?: number;

	@Field(() => Int, { nullable: false })
	myMealPlans?: number;

	@Field(() => Int, { nullable: false })
	chargeDishPlans?: number;
}
