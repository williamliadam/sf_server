import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutBodyDetailInput } from './user-create-without-body-detail.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutBodyDetailInput } from './user-create-or-connect-without-body-detail.input';
import { UserUpsertWithoutBodyDetailInput } from './user-upsert-without-body-detail.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutBodyDetailInput } from './user-update-to-one-with-where-without-body-detail.input';

@InputType()
export class UserUpdateOneRequiredWithoutBodyDetailNestedInput {
	@Field(() => UserCreateWithoutBodyDetailInput, { nullable: true })
	@Type(() => UserCreateWithoutBodyDetailInput)
	create?: UserCreateWithoutBodyDetailInput;

	@Field(() => UserCreateOrConnectWithoutBodyDetailInput, { nullable: true })
	@Type(() => UserCreateOrConnectWithoutBodyDetailInput)
	connectOrCreate?: UserCreateOrConnectWithoutBodyDetailInput;

	@Field(() => UserUpsertWithoutBodyDetailInput, { nullable: true })
	@Type(() => UserUpsertWithoutBodyDetailInput)
	upsert?: UserUpsertWithoutBodyDetailInput;

	@Field(() => UserWhereUniqueInput, { nullable: true })
	@Type(() => UserWhereUniqueInput)
	connect?: Prisma.AtLeast<
		UserWhereUniqueInput,
		'id' | 'email' | 'phone' | 'wxId'
	>;

	@Field(() => UserUpdateToOneWithWhereWithoutBodyDetailInput, {
		nullable: true,
	})
	@Type(() => UserUpdateToOneWithWhereWithoutBodyDetailInput)
	update?: UserUpdateToOneWithWhereWithoutBodyDetailInput;
}
