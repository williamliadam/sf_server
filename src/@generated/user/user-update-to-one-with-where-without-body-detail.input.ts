import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutBodyDetailInput } from './user-update-without-body-detail.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutBodyDetailInput {
	@Field(() => UserWhereInput, { nullable: true })
	@Type(() => UserWhereInput)
	where?: UserWhereInput;

	@Field(() => UserUpdateWithoutBodyDetailInput, { nullable: false })
	@Type(() => UserUpdateWithoutBodyDetailInput)
	data!: UserUpdateWithoutBodyDetailInput;
}
