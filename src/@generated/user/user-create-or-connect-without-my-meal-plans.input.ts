import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutMyMealPlansInput } from './user-create-without-my-meal-plans.input';

@InputType()
export class UserCreateOrConnectWithoutMyMealPlansInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'phone' | 'wxId'>;

    @Field(() => UserCreateWithoutMyMealPlansInput, {nullable:false})
    @Type(() => UserCreateWithoutMyMealPlansInput)
    create!: UserCreateWithoutMyMealPlansInput;
}
