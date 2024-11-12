import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeWithAggregatesFilter } from "../../common/inputs/DateTimeWithAggregatesFilter.input";
import { IntNullableWithAggregatesFilter } from "../../common/inputs/IntNullableWithAggregatesFilter.input";
import { IntWithAggregatesFilter } from "../../common/inputs/IntWithAggregatesFilter.input";

@NestJsGraphQL.InputType('DishTemplateScalarWhereWithAggregatesInput', { isAbstract: true })
export class DishTemplateScalarWhereWithAggregatesInput {
  @NestJsGraphQL.Field(() => [DishTemplateScalarWhereWithAggregatesInput], { nullable: true })
  AND?: DishTemplateScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => [DishTemplateScalarWhereWithAggregatesInput], { nullable: true })
  OR?: DishTemplateScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => [DishTemplateScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: DishTemplateScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => IntWithAggregatesFilter, { nullable: true })
  id?: IntWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => IntWithAggregatesFilter, { nullable: true })
  recipeId?: IntWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => IntWithAggregatesFilter, { nullable: true })
  amount?: IntWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => IntNullableWithAggregatesFilter, { nullable: true })
  mealTemplateId?: IntNullableWithAggregatesFilter | undefined;
}
