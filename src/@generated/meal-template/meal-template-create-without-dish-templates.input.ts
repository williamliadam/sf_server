import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutMyMealTemplatesInput } from '../user/user-create-nested-one-without-my-meal-templates.input';

@InputType()
export class MealTemplateCreateWithoutDishTemplatesInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutMyMealTemplatesInput, {nullable:false})
    createBy!: UserCreateNestedOneWithoutMyMealTemplatesInput;
}
