import * as NestJsGraphQL from "@nestjs/graphql";
import { SortOrder } from "../../common/enums";
import { MaterialAvgOrderByAggregateInput } from "../../material/inputs/MaterialAvgOrderByAggregateInput.input";
import { MaterialCountOrderByAggregateInput } from "../../material/inputs/MaterialCountOrderByAggregateInput.input";
import { MaterialMaxOrderByAggregateInput } from "../../material/inputs/MaterialMaxOrderByAggregateInput.input";
import { MaterialMinOrderByAggregateInput } from "../../material/inputs/MaterialMinOrderByAggregateInput.input";
import { MaterialSumOrderByAggregateInput } from "../../material/inputs/MaterialSumOrderByAggregateInput.input";

@NestJsGraphQL.InputType('MaterialOrderByWithAggregationInput', { isAbstract: true })
export class MaterialOrderByWithAggregationInput {
  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  name?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  code?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  nickName?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  materiaCategoryId?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => MaterialCountOrderByAggregateInput, { nullable: true })
  _count?: MaterialCountOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => MaterialAvgOrderByAggregateInput, { nullable: true })
  _avg?: MaterialAvgOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => MaterialMaxOrderByAggregateInput, { nullable: true })
  _max?: MaterialMaxOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => MaterialMinOrderByAggregateInput, { nullable: true })
  _min?: MaterialMinOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => MaterialSumOrderByAggregateInput, { nullable: true })
  _sum?: MaterialSumOrderByAggregateInput | undefined;
}
