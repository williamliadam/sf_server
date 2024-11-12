import * as NestJsGraphQL from "@nestjs/graphql";
import { SortOrder } from "../../common/enums";
import { NutritionRowAvgOrderByAggregateInput } from "../../nutritionRow/inputs/NutritionRowAvgOrderByAggregateInput.input";
import { NutritionRowCountOrderByAggregateInput } from "../../nutritionRow/inputs/NutritionRowCountOrderByAggregateInput.input";
import { NutritionRowMaxOrderByAggregateInput } from "../../nutritionRow/inputs/NutritionRowMaxOrderByAggregateInput.input";
import { NutritionRowMinOrderByAggregateInput } from "../../nutritionRow/inputs/NutritionRowMinOrderByAggregateInput.input";
import { NutritionRowSumOrderByAggregateInput } from "../../nutritionRow/inputs/NutritionRowSumOrderByAggregateInput.input";

@NestJsGraphQL.InputType('NutritionRowOrderByWithAggregationInput', { isAbstract: true })
export class NutritionRowOrderByWithAggregationInput {
  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  nutirtionId?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  percent?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  belongToId?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => NutritionRowCountOrderByAggregateInput, { nullable: true })
  _count?: NutritionRowCountOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => NutritionRowAvgOrderByAggregateInput, { nullable: true })
  _avg?: NutritionRowAvgOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => NutritionRowMaxOrderByAggregateInput, { nullable: true })
  _max?: NutritionRowMaxOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => NutritionRowMinOrderByAggregateInput, { nullable: true })
  _min?: NutritionRowMinOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => NutritionRowSumOrderByAggregateInput, { nullable: true })
  _sum?: NutritionRowSumOrderByAggregateInput | undefined;
}
