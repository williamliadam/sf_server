import * as NestJsGraphQL from "@nestjs/graphql";
import { SortOrder } from "../../common/enums";
import { MealPlanAvgOrderByAggregateInput } from "../../mealPlan/inputs/MealPlanAvgOrderByAggregateInput.input";
import { MealPlanCountOrderByAggregateInput } from "../../mealPlan/inputs/MealPlanCountOrderByAggregateInput.input";
import { MealPlanMaxOrderByAggregateInput } from "../../mealPlan/inputs/MealPlanMaxOrderByAggregateInput.input";
import { MealPlanMinOrderByAggregateInput } from "../../mealPlan/inputs/MealPlanMinOrderByAggregateInput.input";
import { MealPlanSumOrderByAggregateInput } from "../../mealPlan/inputs/MealPlanSumOrderByAggregateInput.input";

@NestJsGraphQL.InputType('MealPlanOrderByWithAggregationInput', { isAbstract: true })
export class MealPlanOrderByWithAggregationInput {
  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  planTime?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  userId?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  type?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => MealPlanCountOrderByAggregateInput, { nullable: true })
  _count?: MealPlanCountOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => MealPlanAvgOrderByAggregateInput, { nullable: true })
  _avg?: MealPlanAvgOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => MealPlanMaxOrderByAggregateInput, { nullable: true })
  _max?: MealPlanMaxOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => MealPlanMinOrderByAggregateInput, { nullable: true })
  _min?: MealPlanMinOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => MealPlanSumOrderByAggregateInput, { nullable: true })
  _sum?: MealPlanSumOrderByAggregateInput | undefined;
}
