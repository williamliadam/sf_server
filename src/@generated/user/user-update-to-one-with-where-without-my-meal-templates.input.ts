import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutMyMealTemplatesInput } from './user-update-without-my-meal-templates.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutMyMealTemplatesInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutMyMealTemplatesInput, {nullable:false})
    @Type(() => UserUpdateWithoutMyMealTemplatesInput)
    data!: UserUpdateWithoutMyMealTemplatesInput;
}
