import * as NestJsGraphQL from "@nestjs/graphql";
import { SortOrder } from "../../common/enums";
import { DishPlanAvgOrderByAggregateInput } from "../../dishPlan/inputs/DishPlanAvgOrderByAggregateInput.input";
import { DishPlanCountOrderByAggregateInput } from "../../dishPlan/inputs/DishPlanCountOrderByAggregateInput.input";
import { DishPlanMaxOrderByAggregateInput } from "../../dishPlan/inputs/DishPlanMaxOrderByAggregateInput.input";
import { DishPlanMinOrderByAggregateInput } from "../../dishPlan/inputs/DishPlanMinOrderByAggregateInput.input";
import { DishPlanSumOrderByAggregateInput } from "../../dishPlan/inputs/DishPlanSumOrderByAggregateInput.input";

@NestJsGraphQL.InputType('DishPlanOrderByWithAggregationInput', { isAbstract: true })
export class DishPlanOrderByWithAggregationInput {
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

  @NestJsGraphQL.Field(() => DishPlanCountOrderByAggregateInput, { nullable: true })
  _count?: DishPlanCountOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => DishPlanAvgOrderByAggregateInput, { nullable: true })
  _avg?: DishPlanAvgOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => DishPlanMaxOrderByAggregateInput, { nullable: true })
  _max?: DishPlanMaxOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => DishPlanMinOrderByAggregateInput, { nullable: true })
  _min?: DishPlanMinOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => DishPlanSumOrderByAggregateInput, { nullable: true })
  _sum?: DishPlanSumOrderByAggregateInput | undefined;
}
