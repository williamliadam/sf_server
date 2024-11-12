import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutMyMealTemplatesInput } from './user-update-without-my-meal-templates.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutMyMealTemplatesInput } from './user-create-without-my-meal-templates.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutMyMealTemplatesInput {

    @Field(() => UserUpdateWithoutMyMealTemplatesInput, {nullable:false})
    @Type(() => UserUpdateWithoutMyMealTemplatesInput)
    update!: UserUpdateWithoutMyMealTemplatesInput;

    @Field(() => UserCreateWithoutMyMealTemplatesInput, {nullable:false})
    @Type(() => UserCreateWithoutMyMealTemplatesInput)
    create!: UserCreateWithoutMyMealTemplatesInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
