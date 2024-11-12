import * as NestJsGraphQL from "@nestjs/graphql";
import { SortOrder } from "../../common/enums";
import { RecipeAvgOrderByAggregateInput } from "../../recipe/inputs/RecipeAvgOrderByAggregateInput.input";
import { RecipeCountOrderByAggregateInput } from "../../recipe/inputs/RecipeCountOrderByAggregateInput.input";
import { RecipeMaxOrderByAggregateInput } from "../../recipe/inputs/RecipeMaxOrderByAggregateInput.input";
import { RecipeMinOrderByAggregateInput } from "../../recipe/inputs/RecipeMinOrderByAggregateInput.input";
import { RecipeSumOrderByAggregateInput } from "../../recipe/inputs/RecipeSumOrderByAggregateInput.input";

@NestJsGraphQL.InputType('RecipeOrderByWithAggregationInput', { isAbstract: true })
export class RecipeOrderByWithAggregationInput {
  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  name?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  stars?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  authorId?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => RecipeCountOrderByAggregateInput, { nullable: true })
  _count?: RecipeCountOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => RecipeAvgOrderByAggregateInput, { nullable: true })
  _avg?: RecipeAvgOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => RecipeMaxOrderByAggregateInput, { nullable: true })
  _max?: RecipeMaxOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => RecipeMinOrderByAggregateInput, { nullable: true })
  _min?: RecipeMinOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => RecipeSumOrderByAggregateInput, { nullable: true })
  _sum?: RecipeSumOrderByAggregateInput | undefined;
}
