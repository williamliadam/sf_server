import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeNullableWithAggregatesFilter } from "../../common/inputs/DateTimeNullableWithAggregatesFilter.input";
import { DateTimeWithAggregatesFilter } from "../../common/inputs/DateTimeWithAggregatesFilter.input";
import { EnumMealTypeWithAggregatesFilter } from "../../common/inputs/EnumMealTypeWithAggregatesFilter.input";
import { IntWithAggregatesFilter } from "../../common/inputs/IntWithAggregatesFilter.input";

@NestJsGraphQL.InputType('MealPlanScalarWhereWithAggregatesInput', { isAbstract: true })
export class MealPlanScalarWhereWithAggregatesInput {
  @NestJsGraphQL.Field(() => [MealPlanScalarWhereWithAggregatesInput], { nullable: true })
  AND?: MealPlanScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => [MealPlanScalarWhereWithAggregatesInput], { nullable: true })
  OR?: MealPlanScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => [MealPlanScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: MealPlanScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => IntWithAggregatesFilter, { nullable: true })
  id?: IntWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeNullableWithAggregatesFilter, { nullable: true })
  planTime?: DateTimeNullableWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => IntWithAggregatesFilter, { nullable: true })
  userId?: IntWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => EnumMealTypeWithAggregatesFilter, { nullable: true })
  type?: EnumMealTypeWithAggregatesFilter | undefined;
}
