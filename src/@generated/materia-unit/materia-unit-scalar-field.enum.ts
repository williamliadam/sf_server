import { registerEnumType } from '@nestjs/graphql';

export enum MateriaUnitScalarFieldEnum {
	id = 'id',
	code = 'code',
	name = 'name',
	toKilo = 'toKilo',
	createdAt = 'createdAt',
	updatedAt = 'updatedAt',
}

registerEnumType(MateriaUnitScalarFieldEnum, {
	name: 'MateriaUnitScalarFieldEnum',
	description: undefined,
});
