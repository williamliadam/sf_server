import * as NestJsGraphQL from "@nestjs/graphql";
import { SortOrder } from "../../common/enums";
import { DishPlanOrderByRelationAggregateInput } from "../../dishPlan/inputs/DishPlanOrderByRelationAggregateInput.input";
import { UserOrderByWithRelationInput } from "../../user/inputs/UserOrderByWithRelationInput.input";

@NestJsGraphQL.InputType('MealPlanOrderByWithRelationInput', { isAbstract: true })
export class MealPlanOrderByWithRelationInput {
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

  @NestJsGraphQL.Field(() => DishPlanOrderByRelationAggregateInput, { nullable: true })
  dishPlans?: DishPlanOrderByRelationAggregateInput | undefined;

  @NestJsGraphQL.Field(() => UserOrderByWithRelationInput, { nullable: true })
  createBy?: UserOrderByWithRelationInput | undefined;
}
