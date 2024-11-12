import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeWithAggregatesFilter } from "../../common/inputs/DateTimeWithAggregatesFilter.input";
import { IntNullableWithAggregatesFilter } from "../../common/inputs/IntNullableWithAggregatesFilter.input";
import { IntWithAggregatesFilter } from "../../common/inputs/IntWithAggregatesFilter.input";
import { StringWithAggregatesFilter } from "../../common/inputs/StringWithAggregatesFilter.input";

@NestJsGraphQL.InputType('MateriaCategoryScalarWhereWithAggregatesInput', { isAbstract: true })
export class MateriaCategoryScalarWhereWithAggregatesInput {
  @NestJsGraphQL.Field(() => [MateriaCategoryScalarWhereWithAggregatesInput], { nullable: true })
  AND?: MateriaCategoryScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => [MateriaCategoryScalarWhereWithAggregatesInput], { nullable: true })
  OR?: MateriaCategoryScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => [MateriaCategoryScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: MateriaCategoryScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => IntWithAggregatesFilter, { nullable: true })
  id?: IntWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  code?: StringWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  name?: StringWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => IntNullableWithAggregatesFilter, { nullable: true })
  lastId?: IntNullableWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
