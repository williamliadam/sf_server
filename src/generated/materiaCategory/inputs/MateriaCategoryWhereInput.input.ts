import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeFilter } from "../../common/inputs/DateTimeFilter.input";
import { IntFilter } from "../../common/inputs/IntFilter.input";
import { IntNullableFilter } from "../../common/inputs/IntNullableFilter.input";
import { StringFilter } from "../../common/inputs/StringFilter.input";
import { MateriaCategoryListRelationFilter } from "../../materiaCategory/inputs/MateriaCategoryListRelationFilter.input";
import { MateriaCategoryRelationFilter } from "../../materiaCategory/inputs/MateriaCategoryRelationFilter.input";
import { MaterialListRelationFilter } from "../../material/inputs/MaterialListRelationFilter.input";

@NestJsGraphQL.InputType('MateriaCategoryWhereInput', { isAbstract: true })
export class MateriaCategoryWhereInput {
  @NestJsGraphQL.Field(() => [MateriaCategoryWhereInput], { nullable: true })
  AND?: MateriaCategoryWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [MateriaCategoryWhereInput], { nullable: true })
  OR?: MateriaCategoryWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [MateriaCategoryWhereInput], { nullable: true })
  NOT?: MateriaCategoryWhereInput[] | undefined;

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

  @NestJsGraphQL.Field(() => MaterialListRelationFilter, { nullable: true })
  materials?: MaterialListRelationFilter | undefined;

  @NestJsGraphQL.Field(() => MateriaCategoryListRelationFilter, { nullable: true })
  next?: MateriaCategoryListRelationFilter | undefined;

  @NestJsGraphQL.Field(() => MateriaCategoryRelationFilter, { nullable: true })
  last?: MateriaCategoryRelationFilter | undefined;
}
