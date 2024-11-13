import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutMyPostsInput } from './user-update-without-my-posts.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutMyPostsInput } from './user-create-without-my-posts.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutMyPostsInput {
	@Field(() => UserUpdateWithoutMyPostsInput, { nullable: false })
	@Type(() => UserUpdateWithoutMyPostsInput)
	update!: UserUpdateWithoutMyPostsInput;

	@Field(() => UserCreateWithoutMyPostsInput, { nullable: false })
	@Type(() => UserCreateWithoutMyPostsInput)
	create!: UserCreateWithoutMyPostsInput;

	@Field(() => UserWhereInput, { nullable: true })
	@Type(() => UserWhereInput)
	where?: UserWhereInput;
}
