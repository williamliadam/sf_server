import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutChargeDishPlansInput } from './user-create-without-charge-dish-plans.input';

@InputType()
export class UserCreateOrConnectWithoutChargeDishPlansInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'phone' | 'wxId'>;

    @Field(() => UserCreateWithoutChargeDishPlansInput, {nullable:false})
    @Type(() => UserCreateWithoutChargeDishPlansInput)
    create!: UserCreateWithoutChargeDishPlansInput;
}
