import * as NestJsGraphQL from "@nestjs/graphql";
import { SortOrder } from "../../common/enums";
import { IngredientOrderByRelationAggregateInput } from "../../ingredient/inputs/IngredientOrderByRelationAggregateInput.input";
import { MateriaCategoryOrderByWithRelationInput } from "../../materiaCategory/inputs/MateriaCategoryOrderByWithRelationInput.input";
import { NutritionRowOrderByRelationAggregateInput } from "../../nutritionRow/inputs/NutritionRowOrderByRelationAggregateInput.input";

@NestJsGraphQL.InputType('MaterialOrderByWithRelationInput', { isAbstract: true })
export class MaterialOrderByWithRelationInput {
  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  name?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  code?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  nickName?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  materiaCategoryId?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => MateriaCategoryOrderByWithRelationInput, { nullable: true })
  category?: MateriaCategoryOrderByWithRelationInput | undefined;

  @NestJsGraphQL.Field(() => NutritionRowOrderByRelationAggregateInput, { nullable: true })
  nutritionMatrix?: NutritionRowOrderByRelationAggregateInput | undefined;

  @NestJsGraphQL.Field(() => IngredientOrderByRelationAggregateInput, { nullable: true })
  ingredients?: IngredientOrderByRelationAggregateInput | undefined;
}
