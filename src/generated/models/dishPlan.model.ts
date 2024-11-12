import * as NestJsGraphQL from "@nestjs/graphql";
import { MealPlan } from "../models/mealPlan.model";
import { Recipe } from "../models/recipe.model";
import { User } from "../models/user.model";

@NestJsGraphQL.ObjectType('DishPlan', { isAbstract: true })
export class DishPlan {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  id!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  recipeId!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  amount!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  planCookerId!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  mealPlanId?: number | null;

  @NestJsGraphQL.Field(() => Date)
  createdAt!: Date;

  @NestJsGraphQL.Field(() => Date)
  updatedAt!: Date;

  planCooker?: User;

  recipe?: Recipe;

  usedMealPlan?: MealPlan | null;
}
