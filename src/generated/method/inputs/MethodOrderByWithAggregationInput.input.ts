import * as NestJsGraphQL from "@nestjs/graphql";
import { SortOrder } from "../../common/enums";
import { MethodAvgOrderByAggregateInput } from "../../method/inputs/MethodAvgOrderByAggregateInput.input";
import { MethodCountOrderByAggregateInput } from "../../method/inputs/MethodCountOrderByAggregateInput.input";
import { MethodMaxOrderByAggregateInput } from "../../method/inputs/MethodMaxOrderByAggregateInput.input";
import { MethodMinOrderByAggregateInput } from "../../method/inputs/MethodMinOrderByAggregateInput.input";
import { MethodSumOrderByAggregateInput } from "../../method/inputs/MethodSumOrderByAggregateInput.input";

@NestJsGraphQL.InputType('MethodOrderByWithAggregationInput', { isAbstract: true })
export class MethodOrderByWithAggregationInput {
  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  code?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  name?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  desc?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  recipeId?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => MethodCountOrderByAggregateInput, { nullable: true })
  _count?: MethodCountOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => MethodAvgOrderByAggregateInput, { nullable: true })
  _avg?: MethodAvgOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => MethodMaxOrderByAggregateInput, { nullable: true })
  _max?: MethodMaxOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => MethodMinOrderByAggregateInput, { nullable: true })
  _min?: MethodMinOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => MethodSumOrderByAggregateInput, { nullable: true })
  _sum?: MethodSumOrderByAggregateInput | undefined;
}
