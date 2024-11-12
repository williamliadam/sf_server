import * as NestJsGraphQL from "@nestjs/graphql";
import { SortOrder } from "../../common/enums";
import { MealPlanOrderByWithRelationInput } from "../../mealPlan/inputs/MealPlanOrderByWithRelationInput.input";
import { RecipeOrderByWithRelationInput } from "../../recipe/inputs/RecipeOrderByWithRelationInput.input";
import { UserOrderByWithRelationInput } from "../../user/inputs/UserOrderByWithRelationInput.input";

@NestJsGraphQL.InputType('DishPlanOrderByWithRelationInput', { isAbstract: true })
export class DishPlanOrderByWithRelationInput {
  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  recipeId?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  amount?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  planCookerId?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  mealPlanId?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => UserOrderByWithRelationInput, { nullable: true })
  planCooker?: UserOrderByWithRelationInput | undefined;

  @NestJsGraphQL.Field(() => RecipeOrderByWithRelationInput, { nullable: true })
  recipe?: RecipeOrderByWithRelationInput | undefined;

  @NestJsGraphQL.Field(() => MealPlanOrderByWithRelationInput, { nullable: true })
  usedMealPlan?: MealPlanOrderByWithRelationInput | undefined;
}
