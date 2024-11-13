import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutBodyDetailInput } from './user-create-without-body-detail.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutBodyDetailInput } from './user-create-or-connect-without-body-detail.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutBodyDetailInput {
	@Field(() => UserCreateWithoutBodyDetailInput, { nullable: true })
	@Type(() => UserCreateWithoutBodyDetailInput)
	create?: UserCreateWithoutBodyDetailInput;

	@Field(() => UserCreateOrConnectWithoutBodyDetailInput, { nullable: true })
	@Type(() => UserCreateOrConnectWithoutBodyDetailInput)
	connectOrCreate?: UserCreateOrConnectWithoutBodyDetailInput;

	@Field(() => UserWhereUniqueInput, { nullable: true })
	@Type(() => UserWhereUniqueInput)
	connect?: Prisma.AtLeast<
		UserWhereUniqueInput,
		'id' | 'email' | 'phone' | 'wxId'
	>;
}
