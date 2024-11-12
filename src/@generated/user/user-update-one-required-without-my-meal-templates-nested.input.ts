import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutMyMealTemplatesInput } from './user-create-without-my-meal-templates.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutMyMealTemplatesInput } from './user-create-or-connect-without-my-meal-templates.input';
import { UserUpsertWithoutMyMealTemplatesInput } from './user-upsert-without-my-meal-templates.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutMyMealTemplatesInput } from './user-update-to-one-with-where-without-my-meal-templates.input';

@InputType()
export class UserUpdateOneRequiredWithoutMyMealTemplatesNestedInput {

    @Field(() => UserCreateWithoutMyMealTemplatesInput, {nullable:true})
    @Type(() => UserCreateWithoutMyMealTemplatesInput)
    create?: UserCreateWithoutMyMealTemplatesInput;

    @Field(() => UserCreateOrConnectWithoutMyMealTemplatesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutMyMealTemplatesInput)
    connectOrCreate?: UserCreateOrConnectWithoutMyMealTemplatesInput;

    @Field(() => UserUpsertWithoutMyMealTemplatesInput, {nullable:true})
    @Type(() => UserUpsertWithoutMyMealTemplatesInput)
    upsert?: UserUpsertWithoutMyMealTemplatesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'phone' | 'wxId'>;

    @Field(() => UserUpdateToOneWithWhereWithoutMyMealTemplatesInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutMyMealTemplatesInput)
    update?: UserUpdateToOneWithWhereWithoutMyMealTemplatesInput;
}
