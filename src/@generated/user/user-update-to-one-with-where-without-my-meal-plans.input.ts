import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutMyMealPlansInput } from './user-update-without-my-meal-plans.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutMyMealPlansInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutMyMealPlansInput, {nullable:false})
    @Type(() => UserUpdateWithoutMyMealPlansInput)
    data!: UserUpdateWithoutMyMealPlansInput;
}
