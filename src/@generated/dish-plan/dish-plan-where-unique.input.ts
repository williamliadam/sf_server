import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DishPlanWhereInput } from './dish-plan-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { RecipeRelationFilter } from '../recipe/recipe-relation-filter.input';
import { MealPlanNullableRelationFilter } from '../meal-plan/meal-plan-nullable-relation-filter.input';

@InputType()
export class DishPlanWhereUniqueInput {
	@Field(() => Int, { nullable: true })
	id?: number;

	@Field(() => [DishPlanWhereInput], { nullable: true })
	AND?: Array<DishPlanWhereInput>;

	@Field(() => [DishPlanWhereInput], { nullable: true })
	OR?: Array<DishPlanWhereInput>;

	@Field(() => [DishPlanWhereInput], { nullable: true })
	NOT?: Array<DishPlanWhereInput>;

	@Field(() => IntFilter, { nullable: true })
	recipeId?: IntFilter;

	@Field(() => IntFilter, { nullable: true })
	amount?: IntFilter;

	@Field(() => IntFilter, { nullable: true })
	planCookerId?: IntFilter;

	@Field(() => IntNullableFilter, { nullable: true })
	mealPlanId?: IntNullableFilter;

	@Field(() => DateTimeFilter, { nullable: true })
	createdAt?: DateTimeFilter;

	@Field(() => DateTimeFilter, { nullable: true })
	updatedAt?: DateTimeFilter;

	@Field(() => UserRelationFilter, { nullable: true })
	planCooker?: UserRelationFilter;

	@Field(() => RecipeRelationFilter, { nullable: true })
	recipe?: RecipeRelationFilter;

	@Field(() => MealPlanNullableRelationFilter, { nullable: true })
	usedMealPlan?: MealPlanNullableRelationFilter;
}
