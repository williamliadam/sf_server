import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutMyPostsInput } from './user-create-without-my-posts.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutMyPostsInput } from './user-create-or-connect-without-my-posts.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutMyPostsInput {

    @Field(() => UserCreateWithoutMyPostsInput, {nullable:true})
    @Type(() => UserCreateWithoutMyPostsInput)
    create?: UserCreateWithoutMyPostsInput;

    @Field(() => UserCreateOrConnectWithoutMyPostsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutMyPostsInput)
    connectOrCreate?: UserCreateOrConnectWithoutMyPostsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'phone' | 'wxId'>;
}
