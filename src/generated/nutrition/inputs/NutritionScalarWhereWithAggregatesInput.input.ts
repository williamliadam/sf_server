import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeWithAggregatesFilter } from "../../common/inputs/DateTimeWithAggregatesFilter.input";
import { IntWithAggregatesFilter } from "../../common/inputs/IntWithAggregatesFilter.input";
import { StringWithAggregatesFilter } from "../../common/inputs/StringWithAggregatesFilter.input";

@NestJsGraphQL.InputType('NutritionScalarWhereWithAggregatesInput', { isAbstract: true })
export class NutritionScalarWhereWithAggregatesInput {
  @NestJsGraphQL.Field(() => [NutritionScalarWhereWithAggregatesInput], { nullable: true })
  AND?: NutritionScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => [NutritionScalarWhereWithAggregatesInput], { nullable: true })
  OR?: NutritionScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => [NutritionScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: NutritionScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => IntWithAggregatesFilter, { nullable: true })
  id?: IntWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  code?: StringWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  name?: StringWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
