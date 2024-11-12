import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeFilter } from "../../common/inputs/DateTimeFilter.input";
import { IntFilter } from "../../common/inputs/IntFilter.input";
import { IntNullableFilter } from "../../common/inputs/IntNullableFilter.input";
import { UserRelationFilter } from "../../user/inputs/UserRelationFilter.input";

@NestJsGraphQL.InputType('BodyDetailWhereInput', { isAbstract: true })
export class BodyDetailWhereInput {
  @NestJsGraphQL.Field(() => [BodyDetailWhereInput], { nullable: true })
  AND?: BodyDetailWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [BodyDetailWhereInput], { nullable: true })
  OR?: BodyDetailWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [BodyDetailWhereInput], { nullable: true })
  NOT?: BodyDetailWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  id?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => IntNullableFilter, { nullable: true })
  weight?: IntNullableFilter | undefined;

  @NestJsGraphQL.Field(() => IntNullableFilter, { nullable: true })
  height?: IntNullableFilter | undefined;

  @NestJsGraphQL.Field(() => IntNullableFilter, { nullable: true })
  age?: IntNullableFilter | undefined;

  @NestJsGraphQL.Field(() => IntNullableFilter, { nullable: true })
  bmi?: IntNullableFilter | undefined;

  @NestJsGraphQL.Field(() => IntNullableFilter, { nullable: true })
  bmr?: IntNullableFilter | undefined;

  @NestJsGraphQL.Field(() => IntNullableFilter, { nullable: true })
  tdee?: IntNullableFilter | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  userId?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @NestJsGraphQL.Field(() => UserRelationFilter, { nullable: true })
  user?: UserRelationFilter | undefined;
}
