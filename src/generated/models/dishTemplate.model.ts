import * as NestJsGraphQL from "@nestjs/graphql";
import { MealTemplate } from "../models/mealTemplate.model";
import { Recipe } from "../models/recipe.model";

@NestJsGraphQL.ObjectType('DishTemplate', { isAbstract: true })
export class DishTemplate {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  id!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  recipeId!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  amount!: number;

  @NestJsGraphQL.Field(() => Date)
  createdAt!: Date;

  @NestJsGraphQL.Field(() => Date)
  updatedAt!: Date;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  mealTemplateId?: number | null;

  usedMealTemplates?: MealTemplate | null;

  recipe?: Recipe;
}
