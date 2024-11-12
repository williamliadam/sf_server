import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RecipeCreateNestedOneWithoutUsedDishPlansInput } from '../recipe/recipe-create-nested-one-without-used-dish-plans.input';
import { MealPlanCreateNestedOneWithoutDishPlansInput } from '../meal-plan/meal-plan-create-nested-one-without-dish-plans.input';

@InputType()
export class DishPlanCreateWithoutPlanCookerInput {

    @Field(() => Int, {nullable:false})
    amount!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => RecipeCreateNestedOneWithoutUsedDishPlansInput, {nullable:false})
    recipe!: RecipeCreateNestedOneWithoutUsedDishPlansInput;

    @Field(() => MealPlanCreateNestedOneWithoutDishPlansInput, {nullable:true})
    usedMealPlan?: MealPlanCreateNestedOneWithoutDishPlansInput;
}
