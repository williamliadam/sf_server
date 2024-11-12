import * as NestJsGraphQL from "@nestjs/graphql";
import { SortOrder } from "../../common/enums";
import { MealTemplateAvgOrderByAggregateInput } from "../../mealTemplate/inputs/MealTemplateAvgOrderByAggregateInput.input";
import { MealTemplateCountOrderByAggregateInput } from "../../mealTemplate/inputs/MealTemplateCountOrderByAggregateInput.input";
import { MealTemplateMaxOrderByAggregateInput } from "../../mealTemplate/inputs/MealTemplateMaxOrderByAggregateInput.input";
import { MealTemplateMinOrderByAggregateInput } from "../../mealTemplate/inputs/MealTemplateMinOrderByAggregateInput.input";
import { MealTemplateSumOrderByAggregateInput } from "../../mealTemplate/inputs/MealTemplateSumOrderByAggregateInput.input";

@NestJsGraphQL.InputType('MealTemplateOrderByWithAggregationInput', { isAbstract: true })
export class MealTemplateOrderByWithAggregationInput {
  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  name?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  userId?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => MealTemplateCountOrderByAggregateInput, { nullable: true })
  _count?: MealTemplateCountOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => MealTemplateAvgOrderByAggregateInput, { nullable: true })
  _avg?: MealTemplateAvgOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => MealTemplateMaxOrderByAggregateInput, { nullable: true })
  _max?: MealTemplateMaxOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => MealTemplateMinOrderByAggregateInput, { nullable: true })
  _min?: MealTemplateMinOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => MealTemplateSumOrderByAggregateInput, { nullable: true })
  _sum?: MealTemplateSumOrderByAggregateInput | undefined;
}
