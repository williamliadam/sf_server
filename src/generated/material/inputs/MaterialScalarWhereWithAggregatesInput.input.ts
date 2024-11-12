import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeWithAggregatesFilter } from "../../common/inputs/DateTimeWithAggregatesFilter.input";
import { IntWithAggregatesFilter } from "../../common/inputs/IntWithAggregatesFilter.input";
import { StringWithAggregatesFilter } from "../../common/inputs/StringWithAggregatesFilter.input";

@NestJsGraphQL.InputType('MaterialScalarWhereWithAggregatesInput', { isAbstract: true })
export class MaterialScalarWhereWithAggregatesInput {
  @NestJsGraphQL.Field(() => [MaterialScalarWhereWithAggregatesInput], { nullable: true })
  AND?: MaterialScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => [MaterialScalarWhereWithAggregatesInput], { nullable: true })
  OR?: MaterialScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => [MaterialScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: MaterialScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => IntWithAggregatesFilter, { nullable: true })
  id?: IntWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  name?: StringWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  code?: StringWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  nickName?: StringWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => IntWithAggregatesFilter, { nullable: true })
  materiaCategoryId?: IntWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
