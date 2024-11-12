import * as NestJsGraphQL from "@nestjs/graphql";
import { SortOrder } from "../../common/enums";
import { DishPlanOrderByRelationAggregateInput } from "../../dishPlan/inputs/DishPlanOrderByRelationAggregateInput.input";
import { DishTemplateOrderByRelationAggregateInput } from "../../dishTemplate/inputs/DishTemplateOrderByRelationAggregateInput.input";
import { IngredientOrderByRelationAggregateInput } from "../../ingredient/inputs/IngredientOrderByRelationAggregateInput.input";
import { MethodOrderByRelationAggregateInput } from "../../method/inputs/MethodOrderByRelationAggregateInput.input";
import { UserOrderByWithRelationInput } from "../../user/inputs/UserOrderByWithRelationInput.input";

@NestJsGraphQL.InputType('RecipeOrderByWithRelationInput', { isAbstract: true })
export class RecipeOrderByWithRelationInput {
  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  name?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  stars?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  authorId?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => UserOrderByWithRelationInput, { nullable: true })
  author?: UserOrderByWithRelationInput | undefined;

  @NestJsGraphQL.Field(() => IngredientOrderByRelationAggregateInput, { nullable: true })
  ingredients?: IngredientOrderByRelationAggregateInput | undefined;

  @NestJsGraphQL.Field(() => MethodOrderByRelationAggregateInput, { nullable: true })
  methods?: MethodOrderByRelationAggregateInput | undefined;

  @NestJsGraphQL.Field(() => DishPlanOrderByRelationAggregateInput, { nullable: true })
  usedDishPlans?: DishPlanOrderByRelationAggregateInput | undefined;

  @NestJsGraphQL.Field(() => DishTemplateOrderByRelationAggregateInput, { nullable: true })
  usedDishTemplates?: DishTemplateOrderByRelationAggregateInput | undefined;
}
