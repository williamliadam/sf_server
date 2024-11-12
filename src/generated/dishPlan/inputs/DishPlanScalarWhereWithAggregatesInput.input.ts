import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeWithAggregatesFilter } from "../../common/inputs/DateTimeWithAggregatesFilter.input";
import { IntNullableWithAggregatesFilter } from "../../common/inputs/IntNullableWithAggregatesFilter.input";
import { IntWithAggregatesFilter } from "../../common/inputs/IntWithAggregatesFilter.input";

@NestJsGraphQL.InputType('DishPlanScalarWhereWithAggregatesInput', { isAbstract: true })
export class DishPlanScalarWhereWithAggregatesInput {
  @NestJsGraphQL.Field(() => [DishPlanScalarWhereWithAggregatesInput], { nullable: true })
  AND?: DishPlanScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => [DishPlanScalarWhereWithAggregatesInput], { nullable: true })
  OR?: DishPlanScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => [DishPlanScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: DishPlanScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => IntWithAggregatesFilter, { nullable: true })
  id?: IntWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => IntWithAggregatesFilter, { nullable: true })
  recipeId?: IntWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => IntWithAggregatesFilter, { nullable: true })
  amount?: IntWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => IntWithAggregatesFilter, { nullable: true })
  planCookerId?: IntWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => IntNullableWithAggregatesFilter, { nullable: true })
  mealPlanId?: IntNullableWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
