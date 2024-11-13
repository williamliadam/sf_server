import { registerEnumType } from '@nestjs/graphql';

export enum DishPlanScalarFieldEnum {
	id = 'id',
	recipeId = 'recipeId',
	amount = 'amount',
	planCookerId = 'planCookerId',
	mealPlanId = 'mealPlanId',
	createdAt = 'createdAt',
	updatedAt = 'updatedAt',
}

registerEnumType(DishPlanScalarFieldEnum, {
	name: 'DishPlanScalarFieldEnum',
	description: undefined,
});
