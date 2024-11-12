import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeFilter } from "../../common/inputs/DateTimeFilter.input";
import { IntFilter } from "../../common/inputs/IntFilter.input";
import { IntNullableFilter } from "../../common/inputs/IntNullableFilter.input";
import { StringFilter } from "../../common/inputs/StringFilter.input";

@NestJsGraphQL.InputType('MateriaCategoryScalarWhereInput', { isAbstract: true })
export class MateriaCategoryScalarWhereInput {
  @NestJsGraphQL.Field(() => [MateriaCategoryScalarWhereInput], { nullable: true })
  AND?: MateriaCategoryScalarWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [MateriaCategoryScalarWhereInput], { nullable: true })
  OR?: MateriaCategoryScalarWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [MateriaCategoryScalarWhereInput], { nullable: true })
  NOT?: MateriaCategoryScalarWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  id?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => StringFilter, { nullable: true })
  code?: StringFilter | undefined;

  @NestJsGraphQL.Field(() => StringFilter, { nullable: true })
  name?: StringFilter | undefined;

  @NestJsGraphQL.Field(() => IntNullableFilter, { nullable: true })
  lastId?: IntNullableFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;
}
