import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutChargeDishPlansInput } from './user-update-without-charge-dish-plans.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutChargeDishPlansInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutChargeDishPlansInput, {nullable:false})
    @Type(() => UserUpdateWithoutChargeDishPlansInput)
    data!: UserUpdateWithoutChargeDishPlansInput;
}
