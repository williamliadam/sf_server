import { registerEnumType } from '@nestjs/graphql';

export enum MealTemplateScalarFieldEnum {
	id = 'id',
	name = 'name',
	userId = 'userId',
	createdAt = 'createdAt',
	updatedAt = 'updatedAt',
}

registerEnumType(MealTemplateScalarFieldEnum, {
	name: 'MealTemplateScalarFieldEnum',
	description: undefined,
});
