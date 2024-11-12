import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeWithAggregatesFilter } from "../../common/inputs/DateTimeWithAggregatesFilter.input";
import { IntWithAggregatesFilter } from "../../common/inputs/IntWithAggregatesFilter.input";
import { StringWithAggregatesFilter } from "../../common/inputs/StringWithAggregatesFilter.input";

@NestJsGraphQL.InputType('MealTemplateScalarWhereWithAggregatesInput', { isAbstract: true })
export class MealTemplateScalarWhereWithAggregatesInput {
  @NestJsGraphQL.Field(() => [MealTemplateScalarWhereWithAggregatesInput], { nullable: true })
  AND?: MealTemplateScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => [MealTemplateScalarWhereWithAggregatesInput], { nullable: true })
  OR?: MealTemplateScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => [MealTemplateScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: MealTemplateScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => IntWithAggregatesFilter, { nullable: true })
  id?: IntWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  name?: StringWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => IntWithAggregatesFilter, { nullable: true })
  userId?: IntWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
