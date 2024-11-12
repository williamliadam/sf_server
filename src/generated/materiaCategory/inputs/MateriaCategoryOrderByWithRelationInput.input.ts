import * as NestJsGraphQL from "@nestjs/graphql";
import { SortOrder } from "../../common/enums";
import { MateriaCategoryOrderByRelationAggregateInput } from "../../materiaCategory/inputs/MateriaCategoryOrderByRelationAggregateInput.input";
import { MaterialOrderByRelationAggregateInput } from "../../material/inputs/MaterialOrderByRelationAggregateInput.input";

@NestJsGraphQL.InputType('MateriaCategoryOrderByWithRelationInput', { isAbstract: true })
export class MateriaCategoryOrderByWithRelationInput {
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

  @NestJsGraphQL.Field(() => MaterialOrderByRelationAggregateInput, { nullable: true })
  materials?: MaterialOrderByRelationAggregateInput | undefined;

  @NestJsGraphQL.Field(() => MateriaCategoryOrderByRelationAggregateInput, { nullable: true })
  next?: MateriaCategoryOrderByRelationAggregateInput | undefined;

  @NestJsGraphQL.Field(() => MateriaCategoryOrderByWithRelationInput, { nullable: true })
  last?: MateriaCategoryOrderByWithRelationInput | undefined;
}
