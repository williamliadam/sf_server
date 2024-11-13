import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutMyPostsInput } from './user-update-without-my-posts.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutMyPostsInput {
	@Field(() => UserWhereInput, { nullable: true })
	@Type(() => UserWhereInput)
	where?: UserWhereInput;

	@Field(() => UserUpdateWithoutMyPostsInput, { nullable: false })
	@Type(() => UserUpdateWithoutMyPostsInput)
	data!: UserUpdateWithoutMyPostsInput;
}
