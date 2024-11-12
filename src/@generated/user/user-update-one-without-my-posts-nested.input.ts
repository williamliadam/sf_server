import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutMyPostsInput } from './user-create-without-my-posts.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutMyPostsInput } from './user-create-or-connect-without-my-posts.input';
import { UserUpsertWithoutMyPostsInput } from './user-upsert-without-my-posts.input';
import { UserWhereInput } from './user-where.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutMyPostsInput } from './user-update-to-one-with-where-without-my-posts.input';

@InputType()
export class UserUpdateOneWithoutMyPostsNestedInput {

    @Field(() => UserCreateWithoutMyPostsInput, {nullable:true})
    @Type(() => UserCreateWithoutMyPostsInput)
    create?: UserCreateWithoutMyPostsInput;

    @Field(() => UserCreateOrConnectWithoutMyPostsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutMyPostsInput)
    connectOrCreate?: UserCreateOrConnectWithoutMyPostsInput;

    @Field(() => UserUpsertWithoutMyPostsInput, {nullable:true})
    @Type(() => UserUpsertWithoutMyPostsInput)
    upsert?: UserUpsertWithoutMyPostsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    disconnect?: UserWhereInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    delete?: UserWhereInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'phone' | 'wxId'>;

    @Field(() => UserUpdateToOneWithWhereWithoutMyPostsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutMyPostsInput)
    update?: UserUpdateToOneWithWhereWithoutMyPostsInput;
}
