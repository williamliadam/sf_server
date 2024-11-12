import * as NestJsGraphQL from "@nestjs/graphql";
import { SortOrder } from "../../common/enums";
import { MateriaUnitAvgOrderByAggregateInput } from "../../materiaUnit/inputs/MateriaUnitAvgOrderByAggregateInput.input";
import { MateriaUnitCountOrderByAggregateInput } from "../../materiaUnit/inputs/MateriaUnitCountOrderByAggregateInput.input";
import { MateriaUnitMaxOrderByAggregateInput } from "../../materiaUnit/inputs/MateriaUnitMaxOrderByAggregateInput.input";
import { MateriaUnitMinOrderByAggregateInput } from "../../materiaUnit/inputs/MateriaUnitMinOrderByAggregateInput.input";
import { MateriaUnitSumOrderByAggregateInput } from "../../materiaUnit/inputs/MateriaUnitSumOrderByAggregateInput.input";

@NestJsGraphQL.InputType('MateriaUnitOrderByWithAggregationInput', { isAbstract: true })
export class MateriaUnitOrderByWithAggregationInput {
  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  code?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  name?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  toKilo?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => MateriaUnitCountOrderByAggregateInput, { nullable: true })
  _count?: MateriaUnitCountOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => MateriaUnitAvgOrderByAggregateInput, { nullable: true })
  _avg?: MateriaUnitAvgOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => MateriaUnitMaxOrderByAggregateInput, { nullable: true })
  _max?: MateriaUnitMaxOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => MateriaUnitMinOrderByAggregateInput, { nullable: true })
  _min?: MateriaUnitMinOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => MateriaUnitSumOrderByAggregateInput, { nullable: true })
  _sum?: MateriaUnitSumOrderByAggregateInput | undefined;
}
