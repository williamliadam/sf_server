import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutMyRecipesInput } from './user-update-without-my-recipes.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutMyRecipesInput } from './user-create-without-my-recipes.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutMyRecipesInput {

    @Field(() => UserUpdateWithoutMyRecipesInput, {nullable:false})
    @Type(() => UserUpdateWithoutMyRecipesInput)
    update!: UserUpdateWithoutMyRecipesInput;

    @Field(() => UserCreateWithoutMyRecipesInput, {nullable:false})
    @Type(() => UserCreateWithoutMyRecipesInput)
    create!: UserCreateWithoutMyRecipesInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
