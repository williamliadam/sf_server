import * as NestJsGraphQL from "@nestjs/graphql";
import { SortOrder } from "../../common/enums";
import { DishTemplateAvgOrderByAggregateInput } from "../../dishTemplate/inputs/DishTemplateAvgOrderByAggregateInput.input";
import { DishTemplateCountOrderByAggregateInput } from "../../dishTemplate/inputs/DishTemplateCountOrderByAggregateInput.input";
import { DishTemplateMaxOrderByAggregateInput } from "../../dishTemplate/inputs/DishTemplateMaxOrderByAggregateInput.input";
import { DishTemplateMinOrderByAggregateInput } from "../../dishTemplate/inputs/DishTemplateMinOrderByAggregateInput.input";
import { DishTemplateSumOrderByAggregateInput } from "../../dishTemplate/inputs/DishTemplateSumOrderByAggregateInput.input";

@NestJsGraphQL.InputType('DishTemplateOrderByWithAggregationInput', { isAbstract: true })
export class DishTemplateOrderByWithAggregationInput {
  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  recipeId?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  amount?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  mealTemplateId?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => DishTemplateCountOrderByAggregateInput, { nullable: true })
  _count?: DishTemplateCountOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => DishTemplateAvgOrderByAggregateInput, { nullable: true })
  _avg?: DishTemplateAvgOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => DishTemplateMaxOrderByAggregateInput, { nullable: true })
  _max?: DishTemplateMaxOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => DishTemplateMinOrderByAggregateInput, { nullable: true })
  _min?: DishTemplateMinOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => DishTemplateSumOrderByAggregateInput, { nullable: true })
  _sum?: DishTemplateSumOrderByAggregateInput | undefined;
}
