import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutMyRecipesInput } from './user-update-without-my-recipes.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutMyRecipesInput {
	@Field(() => UserWhereInput, { nullable: true })
	@Type(() => UserWhereInput)
	where?: UserWhereInput;

	@Field(() => UserUpdateWithoutMyRecipesInput, { nullable: false })
	@Type(() => UserUpdateWithoutMyRecipesInput)
	data!: UserUpdateWithoutMyRecipesInput;
}
