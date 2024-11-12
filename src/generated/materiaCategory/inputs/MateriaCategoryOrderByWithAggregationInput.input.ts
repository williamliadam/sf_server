import * as NestJsGraphQL from "@nestjs/graphql";
import { SortOrder } from "../../common/enums";
import { MateriaCategoryAvgOrderByAggregateInput } from "../../materiaCategory/inputs/MateriaCategoryAvgOrderByAggregateInput.input";
import { MateriaCategoryCountOrderByAggregateInput } from "../../materiaCategory/inputs/MateriaCategoryCountOrderByAggregateInput.input";
import { MateriaCategoryMaxOrderByAggregateInput } from "../../materiaCategory/inputs/MateriaCategoryMaxOrderByAggregateInput.input";
import { MateriaCategoryMinOrderByAggregateInput } from "../../materiaCategory/inputs/MateriaCategoryMinOrderByAggregateInput.input";
import { MateriaCategorySumOrderByAggregateInput } from "../../materiaCategory/inputs/MateriaCategorySumOrderByAggregateInput.input";

@NestJsGraphQL.InputType('MateriaCategoryOrderByWithAggregationInput', { isAbstract: true })
export class MateriaCategoryOrderByWithAggregationInput {
  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  code?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  name?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  lastId?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => MateriaCategoryCountOrderByAggregateInput, { nullable: true })
  _count?: MateriaCategoryCountOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => MateriaCategoryAvgOrderByAggregateInput, { nullable: true })
  _avg?: MateriaCategoryAvgOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => MateriaCategoryMaxOrderByAggregateInput, { nullable: true })
  _max?: MateriaCategoryMaxOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => MateriaCategoryMinOrderByAggregateInput, { nullable: true })
  _min?: MateriaCategoryMinOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => MateriaCategorySumOrderByAggregateInput, { nullable: true })
  _sum?: MateriaCategorySumOrderByAggregateInput | undefined;
}
