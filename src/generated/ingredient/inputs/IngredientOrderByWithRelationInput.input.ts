import * as NestJsGraphQL from "@nestjs/graphql";
import { SortOrder } from "../../common/enums";
import { MaterialOrderByWithRelationInput } from "../../material/inputs/MaterialOrderByWithRelationInput.input";
import { MateriaUnitOrderByWithRelationInput } from "../../materiaUnit/inputs/MateriaUnitOrderByWithRelationInput.input";
import { RecipeOrderByWithRelationInput } from "../../recipe/inputs/RecipeOrderByWithRelationInput.input";

@NestJsGraphQL.InputType('IngredientOrderByWithRelationInput', { isAbstract: true })
export class IngredientOrderByWithRelationInput {
  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  materialId?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  amount?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  materiaUnitId?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  recipeId?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => MaterialOrderByWithRelationInput, { nullable: true })
  material?: MaterialOrderByWithRelationInput | undefined;

  @NestJsGraphQL.Field(() => MateriaUnitOrderByWithRelationInput, { nullable: true })
  unit?: MateriaUnitOrderByWithRelationInput | undefined;

  @NestJsGraphQL.Field(() => RecipeOrderByWithRelationInput, { nullable: true })
  usedRecipe?: RecipeOrderByWithRelationInput | undefined;
}
