import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeFilter } from "../../common/inputs/DateTimeFilter.input";
import { IntFilter } from "../../common/inputs/IntFilter.input";
import { StringFilter } from "../../common/inputs/StringFilter.input";

@NestJsGraphQL.InputType('MaterialScalarWhereInput', { isAbstract: true })
export class MaterialScalarWhereInput {
  @NestJsGraphQL.Field(() => [MaterialScalarWhereInput], { nullable: true })
  AND?: MaterialScalarWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [MaterialScalarWhereInput], { nullable: true })
  OR?: MaterialScalarWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [MaterialScalarWhereInput], { nullable: true })
  NOT?: MaterialScalarWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  id?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => StringFilter, { nullable: true })
  name?: StringFilter | undefined;

  @NestJsGraphQL.Field(() => StringFilter, { nullable: true })
  code?: StringFilter | undefined;

  @NestJsGraphQL.Field(() => StringFilter, { nullable: true })
  nickName?: StringFilter | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  materiaCategoryId?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;
}
