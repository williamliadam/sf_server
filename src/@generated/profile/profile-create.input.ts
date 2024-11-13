import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Goal } from '../prisma/goal.enum';
import { UserCreateNestedOneWithoutProfileInput } from '../user/user-create-nested-one-without-profile.input';

@InputType()
export class ProfileCreateInput {
	@Field(() => String, { nullable: true })
	avatar?: string;

	@Field(() => String, { nullable: true })
	nickName?: string;

	@Field(() => Date, { nullable: true })
	createdAt?: Date | string;

	@Field(() => Date, { nullable: true })
	updatedAt?: Date | string;

	@Field(() => Goal, { nullable: true })
	goal?: keyof typeof Goal;

	@Field(() => UserCreateNestedOneWithoutProfileInput, { nullable: false })
	user!: UserCreateNestedOneWithoutProfileInput;
}
