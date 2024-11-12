import * as NestJsGraphQL from "@nestjs/graphql";
import { SortOrder } from "../../common/enums";
import { NutritionAvgOrderByAggregateInput } from "../../nutrition/inputs/NutritionAvgOrderByAggregateInput.input";
import { NutritionCountOrderByAggregateInput } from "../../nutrition/inputs/NutritionCountOrderByAggregateInput.input";
import { NutritionMaxOrderByAggregateInput } from "../../nutrition/inputs/NutritionMaxOrderByAggregateInput.input";
import { NutritionMinOrderByAggregateInput } from "../../nutrition/inputs/NutritionMinOrderByAggregateInput.input";
import { NutritionSumOrderByAggregateInput } from "../../nutrition/inputs/NutritionSumOrderByAggregateInput.input";

@NestJsGraphQL.InputType('NutritionOrderByWithAggregationInput', { isAbstract: true })
export class NutritionOrderByWithAggregationInput {
  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  code?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  name?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => NutritionCountOrderByAggregateInput, { nullable: true })
  _count?: NutritionCountOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => NutritionAvgOrderByAggregateInput, { nullable: true })
  _avg?: NutritionAvgOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => NutritionMaxOrderByAggregateInput, { nullable: true })
  _max?: NutritionMaxOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => NutritionMinOrderByAggregateInput, { nullable: true })
  _min?: NutritionMinOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => NutritionSumOrderByAggregateInput, { nullable: true })
  _sum?: NutritionSumOrderByAggregateInput | undefined;
}
