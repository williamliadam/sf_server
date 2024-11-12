import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeFilter } from "../../common/inputs/DateTimeFilter.input";
import { IntFilter } from "../../common/inputs/IntFilter.input";
import { IntNullableFilter } from "../../common/inputs/IntNullableFilter.input";
import { StringFilter } from "../../common/inputs/StringFilter.input";

@NestJsGraphQL.InputType('MethodScalarWhereInput', { isAbstract: true })
export class MethodScalarWhereInput {
  @NestJsGraphQL.Field(() => [MethodScalarWhereInput], { nullable: true })
  AND?: MethodScalarWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [MethodScalarWhereInput], { nullable: true })
  OR?: MethodScalarWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [MethodScalarWhereInput], { nullable: true })
  NOT?: MethodScalarWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  id?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => StringFilter, { nullable: true })
  code?: StringFilter | undefined;

  @NestJsGraphQL.Field(() => StringFilter, { nullable: true })
  name?: StringFilter | undefined;

  @NestJsGraphQL.Field(() => StringFilter, { nullable: true })
  desc?: StringFilter | undefined;

  @NestJsGraphQL.Field(() => IntNullableFilter, { nullable: true })
  recipeId?: IntNullableFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;
}
