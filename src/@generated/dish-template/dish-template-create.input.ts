import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MealTemplateCreateNestedOneWithoutDishTemplatesInput } from '../meal-template/meal-template-create-nested-one-without-dish-templates.input';
import { RecipeCreateNestedOneWithoutUsedDishTemplatesInput } from '../recipe/recipe-create-nested-one-without-used-dish-templates.input';

@InputType()
export class DishTemplateCreateInput {

    @Field(() => Int, {nullable:false})
    amount!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => MealTemplateCreateNestedOneWithoutDishTemplatesInput, {nullable:true})
    usedMealTemplates?: MealTemplateCreateNestedOneWithoutDishTemplatesInput;

    @Field(() => RecipeCreateNestedOneWithoutUsedDishTemplatesInput, {nullable:false})
    recipe!: RecipeCreateNestedOneWithoutUsedDishTemplatesInput;
}
