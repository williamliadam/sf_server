import { registerEnumType } from '@nestjs/graphql';

export enum NutritionScalarFieldEnum {
	id = 'id',
	code = 'code',
	name = 'name',
	createdAt = 'createdAt',
	updatedAt = 'updatedAt',
}

registerEnumType(NutritionScalarFieldEnum, {
	name: 'NutritionScalarFieldEnum',
	description: undefined,
});
