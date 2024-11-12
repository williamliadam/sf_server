import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeWithAggregatesFilter } from "../../common/inputs/DateTimeWithAggregatesFilter.input";
import { IntNullableWithAggregatesFilter } from "../../common/inputs/IntNullableWithAggregatesFilter.input";
import { IntWithAggregatesFilter } from "../../common/inputs/IntWithAggregatesFilter.input";

@NestJsGraphQL.InputType('IngredientScalarWhereWithAggregatesInput', { isAbstract: true })
export class IngredientScalarWhereWithAggregatesInput {
  @NestJsGraphQL.Field(() => [IngredientScalarWhereWithAggregatesInput], { nullable: true })
  AND?: IngredientScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => [IngredientScalarWhereWithAggregatesInput], { nullable: true })
  OR?: IngredientScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => [IngredientScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: IngredientScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => IntWithAggregatesFilter, { nullable: true })
  id?: IntWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => IntWithAggregatesFilter, { nullable: true })
  materialId?: IntWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => IntWithAggregatesFilter, { nullable: true })
  amount?: IntWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => IntWithAggregatesFilter, { nullable: true })
  materiaUnitId?: IntWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => IntNullableWithAggregatesFilter, { nullable: true })
  recipeId?: IntNullableWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
