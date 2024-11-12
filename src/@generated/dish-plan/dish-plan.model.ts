import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Recipe } from '../recipe/recipe.model';
import { MealPlan } from '../meal-plan/meal-plan.model';

@ObjectType()
export class DishPlan {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    recipeId!: number;

    @Field(() => Int, {nullable:false})
    amount!: number;

    @Field(() => Int, {nullable:false})
    planCookerId!: number;

    @Field(() => Int, {nullable:true})
    mealPlanId!: number | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => User, {nullable:false})
    planCooker?: User;

    @Field(() => Recipe, {nullable:false})
    recipe?: Recipe;

    @Field(() => MealPlan, {nullable:true})
    usedMealPlan?: MealPlan | null;
}
