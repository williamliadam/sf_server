import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeWithAggregatesFilter } from "../../common/inputs/DateTimeWithAggregatesFilter.input";
import { EnumGoalWithAggregatesFilter } from "../../common/inputs/EnumGoalWithAggregatesFilter.input";
import { IntWithAggregatesFilter } from "../../common/inputs/IntWithAggregatesFilter.input";
import { StringNullableWithAggregatesFilter } from "../../common/inputs/StringNullableWithAggregatesFilter.input";

@NestJsGraphQL.InputType('ProfileScalarWhereWithAggregatesInput', { isAbstract: true })
export class ProfileScalarWhereWithAggregatesInput {
  @NestJsGraphQL.Field(() => [ProfileScalarWhereWithAggregatesInput], { nullable: true })
  AND?: ProfileScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => [ProfileScalarWhereWithAggregatesInput], { nullable: true })
  OR?: ProfileScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => [ProfileScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: ProfileScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => IntWithAggregatesFilter, { nullable: true })
  id?: IntWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  avatar?: StringNullableWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  nickName?: StringNullableWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => IntWithAggregatesFilter, { nullable: true })
  userId?: IntWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => EnumGoalWithAggregatesFilter, { nullable: true })
  goal?: EnumGoalWithAggregatesFilter | undefined;
}
