import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeFilter } from "../../common/inputs/DateTimeFilter.input";
import { EnumGoalFilter } from "../../common/inputs/EnumGoalFilter.input";
import { IntFilter } from "../../common/inputs/IntFilter.input";
import { StringNullableFilter } from "../../common/inputs/StringNullableFilter.input";
import { UserRelationFilter } from "../../user/inputs/UserRelationFilter.input";

@NestJsGraphQL.InputType('ProfileWhereInput', { isAbstract: true })
export class ProfileWhereInput {
  @NestJsGraphQL.Field(() => [ProfileWhereInput], { nullable: true })
  AND?: ProfileWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [ProfileWhereInput], { nullable: true })
  OR?: ProfileWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [ProfileWhereInput], { nullable: true })
  NOT?: ProfileWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  id?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => StringNullableFilter, { nullable: true })
  avatar?: StringNullableFilter | undefined;

  @NestJsGraphQL.Field(() => StringNullableFilter, { nullable: true })
  nickName?: StringNullableFilter | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  userId?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @NestJsGraphQL.Field(() => EnumGoalFilter, { nullable: true })
  goal?: EnumGoalFilter | undefined;

  @NestJsGraphQL.Field(() => UserRelationFilter, { nullable: true })
  user?: UserRelationFilter | undefined;
}
