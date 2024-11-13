import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutBodyDetailInput } from './user-create-without-body-detail.input';

@InputType()
export class UserCreateOrConnectWithoutBodyDetailInput {
	@Field(() => UserWhereUniqueInput, { nullable: false })
	@Type(() => UserWhereUniqueInput)
	where!: Prisma.AtLeast<
		UserWhereUniqueInput,
		'id' | 'email' | 'phone' | 'wxId'
	>;

	@Field(() => UserCreateWithoutBodyDetailInput, { nullable: false })
	@Type(() => UserCreateWithoutBodyDetailInput)
	create!: UserCreateWithoutBodyDetailInput;
}
