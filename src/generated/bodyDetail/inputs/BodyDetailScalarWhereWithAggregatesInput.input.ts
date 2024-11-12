import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeWithAggregatesFilter } from "../../common/inputs/DateTimeWithAggregatesFilter.input";
import { IntNullableWithAggregatesFilter } from "../../common/inputs/IntNullableWithAggregatesFilter.input";
import { IntWithAggregatesFilter } from "../../common/inputs/IntWithAggregatesFilter.input";

@NestJsGraphQL.InputType('BodyDetailScalarWhereWithAggregatesInput', { isAbstract: true })
export class BodyDetailScalarWhereWithAggregatesInput {
  @NestJsGraphQL.Field(() => [BodyDetailScalarWhereWithAggregatesInput], { nullable: true })
  AND?: BodyDetailScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => [BodyDetailScalarWhereWithAggregatesInput], { nullable: true })
  OR?: BodyDetailScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => [BodyDetailScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: BodyDetailScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => IntWithAggregatesFilter, { nullable: true })
  id?: IntWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => IntNullableWithAggregatesFilter, { nullable: true })
  weight?: IntNullableWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => IntNullableWithAggregatesFilter, { nullable: true })
  height?: IntNullableWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => IntNullableWithAggregatesFilter, { nullable: true })
  age?: IntNullableWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => IntNullableWithAggregatesFilter, { nullable: true })
  bmi?: IntNullableWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => IntNullableWithAggregatesFilter, { nullable: true })
  bmr?: IntNullableWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => IntNullableWithAggregatesFilter, { nullable: true })
  tdee?: IntNullableWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => IntWithAggregatesFilter, { nullable: true })
  userId?: IntWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
