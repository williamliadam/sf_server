import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutMyMealPlansInput } from './user-create-without-my-meal-plans.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutMyMealPlansInput } from './user-create-or-connect-without-my-meal-plans.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutMyMealPlansInput {

    @Field(() => UserCreateWithoutMyMealPlansInput, {nullable:true})
    @Type(() => UserCreateWithoutMyMealPlansInput)
    create?: UserCreateWithoutMyMealPlansInput;

    @Field(() => UserCreateOrConnectWithoutMyMealPlansInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutMyMealPlansInput)
    connectOrCreate?: UserCreateOrConnectWithoutMyMealPlansInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'phone' | 'wxId'>;
}
