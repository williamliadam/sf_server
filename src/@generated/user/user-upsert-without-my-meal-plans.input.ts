import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutMyMealPlansInput } from './user-update-without-my-meal-plans.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutMyMealPlansInput } from './user-create-without-my-meal-plans.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutMyMealPlansInput {

    @Field(() => UserUpdateWithoutMyMealPlansInput, {nullable:false})
    @Type(() => UserUpdateWithoutMyMealPlansInput)
    update!: UserUpdateWithoutMyMealPlansInput;

    @Field(() => UserCreateWithoutMyMealPlansInput, {nullable:false})
    @Type(() => UserCreateWithoutMyMealPlansInput)
    create!: UserCreateWithoutMyMealPlansInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
