import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeWithAggregatesFilter } from "../../common/inputs/DateTimeWithAggregatesFilter.input";
import { IntWithAggregatesFilter } from "../../common/inputs/IntWithAggregatesFilter.input";

@NestJsGraphQL.InputType('NutritionRowScalarWhereWithAggregatesInput', { isAbstract: true })
export class NutritionRowScalarWhereWithAggregatesInput {
  @NestJsGraphQL.Field(() => [NutritionRowScalarWhereWithAggregatesInput], { nullable: true })
  AND?: NutritionRowScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => [NutritionRowScalarWhereWithAggregatesInput], { nullable: true })
  OR?: NutritionRowScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => [NutritionRowScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: NutritionRowScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => IntWithAggregatesFilter, { nullable: true })
  id?: IntWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => IntWithAggregatesFilter, { nullable: true })
  nutirtionId?: IntWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => IntWithAggregatesFilter, { nullable: true })
  percent?: IntWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => IntWithAggregatesFilter, { nullable: true })
  belongToId?: IntWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
