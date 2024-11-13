import { registerEnumType } from '@nestjs/graphql';

export enum DishTemplateScalarFieldEnum {
	id = 'id',
	recipeId = 'recipeId',
	amount = 'amount',
	createdAt = 'createdAt',
	updatedAt = 'updatedAt',
	mealTemplateId = 'mealTemplateId',
}

registerEnumType(DishTemplateScalarFieldEnum, {
	name: 'DishTemplateScalarFieldEnum',
	description: undefined,
});
