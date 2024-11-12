import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeWithAggregatesFilter } from "../../common/inputs/DateTimeWithAggregatesFilter.input";
import { IntWithAggregatesFilter } from "../../common/inputs/IntWithAggregatesFilter.input";
import { StringWithAggregatesFilter } from "../../common/inputs/StringWithAggregatesFilter.input";

@NestJsGraphQL.InputType('MateriaUnitScalarWhereWithAggregatesInput', { isAbstract: true })
export class MateriaUnitScalarWhereWithAggregatesInput {
  @NestJsGraphQL.Field(() => [MateriaUnitScalarWhereWithAggregatesInput], { nullable: true })
  AND?: MateriaUnitScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => [MateriaUnitScalarWhereWithAggregatesInput], { nullable: true })
  OR?: MateriaUnitScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => [MateriaUnitScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: MateriaUnitScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => IntWithAggregatesFilter, { nullable: true })
  id?: IntWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  code?: StringWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  name?: StringWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => IntWithAggregatesFilter, { nullable: true })
  toKilo?: IntWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
