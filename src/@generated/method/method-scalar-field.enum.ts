import { registerEnumType } from '@nestjs/graphql';

export enum MethodScalarFieldEnum {
	id = 'id',
	code = 'code',
	name = 'name',
	desc = 'desc',
	recipeId = 'recipeId',
	createdAt = 'createdAt',
	updatedAt = 'updatedAt',
}

registerEnumType(MethodScalarFieldEnum, {
	name: 'MethodScalarFieldEnum',
	description: undefined,
});
