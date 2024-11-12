import * as NestJsGraphQL from "@nestjs/graphql";
import { SortOrder } from "../../common/enums";
import { IngredientAvgOrderByAggregateInput } from "../../ingredient/inputs/IngredientAvgOrderByAggregateInput.input";
import { IngredientCountOrderByAggregateInput } from "../../ingredient/inputs/IngredientCountOrderByAggregateInput.input";
import { IngredientMaxOrderByAggregateInput } from "../../ingredient/inputs/IngredientMaxOrderByAggregateInput.input";
import { IngredientMinOrderByAggregateInput } from "../../ingredient/inputs/IngredientMinOrderByAggregateInput.input";
import { IngredientSumOrderByAggregateInput } from "../../ingredient/inputs/IngredientSumOrderByAggregateInput.input";

@NestJsGraphQL.InputType('IngredientOrderByWithAggregationInput', { isAbstract: true })
export class IngredientOrderByWithAggregationInput {
  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  materialId?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  amount?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  materiaUnitId?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  recipeId?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => IngredientCountOrderByAggregateInput, { nullable: true })
  _count?: IngredientCountOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => IngredientAvgOrderByAggregateInput, { nullable: true })
  _avg?: IngredientAvgOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => IngredientMaxOrderByAggregateInput, { nullable: true })
  _max?: IngredientMaxOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => IngredientMinOrderByAggregateInput, { nullable: true })
  _min?: IngredientMinOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => IngredientSumOrderByAggregateInput, { nullable: true })
  _sum?: IngredientSumOrderByAggregateInput | undefined;
}
