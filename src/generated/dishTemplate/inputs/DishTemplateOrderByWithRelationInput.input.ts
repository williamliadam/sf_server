import * as NestJsGraphQL from "@nestjs/graphql";
import { SortOrder } from "../../common/enums";
import { MealTemplateOrderByWithRelationInput } from "../../mealTemplate/inputs/MealTemplateOrderByWithRelationInput.input";
import { RecipeOrderByWithRelationInput } from "../../recipe/inputs/RecipeOrderByWithRelationInput.input";

@NestJsGraphQL.InputType('DishTemplateOrderByWithRelationInput', { isAbstract: true })
export class DishTemplateOrderByWithRelationInput {
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

  @NestJsGraphQL.Field(() => MealTemplateOrderByWithRelationInput, { nullable: true })
  usedMealTemplates?: MealTemplateOrderByWithRelationInput | undefined;

  @NestJsGraphQL.Field(() => RecipeOrderByWithRelationInput, { nullable: true })
  recipe?: RecipeOrderByWithRelationInput | undefined;
}
