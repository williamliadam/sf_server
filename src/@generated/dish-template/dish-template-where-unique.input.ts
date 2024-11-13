import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DishTemplateWhereInput } from './dish-template-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { MealTemplateNullableRelationFilter } from '../meal-template/meal-template-nullable-relation-filter.input';
import { RecipeRelationFilter } from '../recipe/recipe-relation-filter.input';

@InputType()
export class DishTemplateWhereUniqueInput {
	@Field(() => Int, { nullable: true })
	id?: number;

	@Field(() => [DishTemplateWhereInput], { nullable: true })
	AND?: Array<DishTemplateWhereInput>;

	@Field(() => [DishTemplateWhereInput], { nullable: true })
	OR?: Array<DishTemplateWhereInput>;

	@Field(() => [DishTemplateWhereInput], { nullable: true })
	NOT?: Array<DishTemplateWhereInput>;

	@Field(() => IntFilter, { nullable: true })
	recipeId?: IntFilter;

	@Field(() => IntFilter, { nullable: true })
	amount?: IntFilter;

	@Field(() => DateTimeFilter, { nullable: true })
	createdAt?: DateTimeFilter;

	@Field(() => DateTimeFilter, { nullable: true })
	updatedAt?: DateTimeFilter;

	@Field(() => IntNullableFilter, { nullable: true })
	mealTemplateId?: IntNullableFilter;

	@Field(() => MealTemplateNullableRelationFilter, { nullable: true })
	usedMealTemplates?: MealTemplateNullableRelationFilter;

	@Field(() => RecipeRelationFilter, { nullable: true })
	recipe?: RecipeRelationFilter;
}
