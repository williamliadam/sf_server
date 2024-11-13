import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Ingredient } from '../ingredient/ingredient.model';
import { Method } from '../method/method.model';
import { DishPlan } from '../dish-plan/dish-plan.model';
import { DishTemplate } from '../dish-template/dish-template.model';
import { RecipeCount } from './recipe-count.output';

@ObjectType()
export class Recipe {
	@Field(() => ID, { nullable: false })
	id!: number;

	@Field(() => String, { nullable: false })
	name!: string;

	@Field(() => Int, { nullable: false })
	stars!: number;

	@Field(() => Int, { nullable: false })
	authorId!: number;

	@Field(() => Date, { nullable: false })
	createdAt!: Date;

	@Field(() => Date, { nullable: false })
	updatedAt!: Date;

	@Field(() => User, { nullable: false })
	author?: User;

	@Field(() => [Ingredient], { nullable: true })
	ingredients?: Array<Ingredient>;

	@Field(() => [Method], { nullable: true })
	methods?: Array<Method>;

	@Field(() => [DishPlan], { nullable: true })
	usedDishPlans?: Array<DishPlan>;

	@Field(() => [DishTemplate], { nullable: true })
	usedDishTemplates?: Array<DishTemplate>;

	@Field(() => RecipeCount, { nullable: false })
	_count?: RecipeCount;
}
