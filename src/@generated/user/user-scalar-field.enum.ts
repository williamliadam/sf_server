import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
	id = 'id',
	email = 'email',
	name = 'name',
	password = 'password',
	phone = 'phone',
	wxId = 'wxId',
	createdAt = 'createdAt',
	updatedAt = 'updatedAt',
	role = 'role',
}

registerEnumType(UserScalarFieldEnum, {
	name: 'UserScalarFieldEnum',
	description: undefined,
});
