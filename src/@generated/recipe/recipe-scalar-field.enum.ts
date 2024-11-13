import { registerEnumType } from '@nestjs/graphql';

export enum RecipeScalarFieldEnum {
	id = 'id',
	name = 'name',
	stars = 'stars',
	authorId = 'authorId',
	createdAt = 'createdAt',
	updatedAt = 'updatedAt',
}

registerEnumType(RecipeScalarFieldEnum, {
	name: 'RecipeScalarFieldEnum',
	description: undefined,
});
