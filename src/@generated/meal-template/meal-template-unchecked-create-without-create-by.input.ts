import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DishTemplateUncheckedCreateNestedManyWithoutUsedMealTemplatesInput } from '../dish-template/dish-template-unchecked-create-nested-many-without-used-meal-templates.input';

@InputType()
export class MealTemplateUncheckedCreateWithoutCreateByInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => DishTemplateUncheckedCreateNestedManyWithoutUsedMealTemplatesInput, {nullable:true})
    dishTemplates?: DishTemplateUncheckedCreateNestedManyWithoutUsedMealTemplatesInput;
}
