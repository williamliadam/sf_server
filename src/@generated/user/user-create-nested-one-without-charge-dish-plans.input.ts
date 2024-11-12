import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutChargeDishPlansInput } from './user-create-without-charge-dish-plans.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutChargeDishPlansInput } from './user-create-or-connect-without-charge-dish-plans.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutChargeDishPlansInput {

    @Field(() => UserCreateWithoutChargeDishPlansInput, {nullable:true})
    @Type(() => UserCreateWithoutChargeDishPlansInput)
    create?: UserCreateWithoutChargeDishPlansInput;

    @Field(() => UserCreateOrConnectWithoutChargeDishPlansInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutChargeDishPlansInput)
    connectOrCreate?: UserCreateOrConnectWithoutChargeDishPlansInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'phone' | 'wxId'>;
}
