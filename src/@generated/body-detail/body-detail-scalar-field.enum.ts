import { registerEnumType } from '@nestjs/graphql';

export enum BodyDetailScalarFieldEnum {
	id = 'id',
	weight = 'weight',
	height = 'height',
	age = 'age',
	bmi = 'bmi',
	bmr = 'bmr',
	tdee = 'tdee',
	userId = 'userId',
	createdAt = 'createdAt',
	updatedAt = 'updatedAt',
}

registerEnumType(BodyDetailScalarFieldEnum, {
	name: 'BodyDetailScalarFieldEnum',
	description: undefined,
});
