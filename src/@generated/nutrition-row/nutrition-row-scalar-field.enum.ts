import { registerEnumType } from '@nestjs/graphql';

export enum NutritionRowScalarFieldEnum {
	id = 'id',
	nutirtionId = 'nutirtionId',
	percent = 'percent',
	belongToId = 'belongToId',
	createdAt = 'createdAt',
	updatedAt = 'updatedAt',
}

registerEnumType(NutritionRowScalarFieldEnum, {
	name: 'NutritionRowScalarFieldEnum',
	description: undefined,
});
