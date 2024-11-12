import * as NestJsGraphQL from "@nestjs/graphql";
import { BodyDetailOrderByWithRelationInput } from "../../bodyDetail/inputs/BodyDetailOrderByWithRelationInput.input";
import { SortOrder } from "../../common/enums";
import { DishPlanOrderByRelationAggregateInput } from "../../dishPlan/inputs/DishPlanOrderByRelationAggregateInput.input";
import { MealPlanOrderByRelationAggregateInput } from "../../mealPlan/inputs/MealPlanOrderByRelationAggregateInput.input";
import { MealTemplateOrderByRelationAggregateInput } from "../../mealTemplate/inputs/MealTemplateOrderByRelationAggregateInput.input";
import { PostOrderByRelationAggregateInput } from "../../post/inputs/PostOrderByRelationAggregateInput.input";
import { ProfileOrderByWithRelationInput } from "../../profile/inputs/ProfileOrderByWithRelationInput.input";
import { RecipeOrderByRelationAggregateInput } from "../../recipe/inputs/RecipeOrderByRelationAggregateInput.input";

@NestJsGraphQL.InputType('UserOrderByWithRelationInput', { isAbstract: true })
export class UserOrderByWithRelationInput {
  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  email?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  name?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  password?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  phone?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  wxId?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  role?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => ProfileOrderByWithRelationInput, { nullable: true })
  profile?: ProfileOrderByWithRelationInput | undefined;

  @NestJsGraphQL.Field(() => BodyDetailOrderByWithRelationInput, { nullable: true })
  bodyDetail?: BodyDetailOrderByWithRelationInput | undefined;

  @NestJsGraphQL.Field(() => PostOrderByRelationAggregateInput, { nullable: true })
  myPosts?: PostOrderByRelationAggregateInput | undefined;

  @NestJsGraphQL.Field(() => RecipeOrderByRelationAggregateInput, { nullable: true })
  myRecipes?: RecipeOrderByRelationAggregateInput | undefined;

  @NestJsGraphQL.Field(() => MealTemplateOrderByRelationAggregateInput, { nullable: true })
  myMealTemplates?: MealTemplateOrderByRelationAggregateInput | undefined;

  @NestJsGraphQL.Field(() => MealPlanOrderByRelationAggregateInput, { nullable: true })
  myMealPlans?: MealPlanOrderByRelationAggregateInput | undefined;

  @NestJsGraphQL.Field(() => DishPlanOrderByRelationAggregateInput, { nullable: true })
  chargeDishPlans?: DishPlanOrderByRelationAggregateInput | undefined;
}
