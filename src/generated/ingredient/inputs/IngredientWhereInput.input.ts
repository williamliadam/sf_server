import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeFilter } from "../../common/inputs/DateTimeFilter.input";
import { IntFilter } from "../../common/inputs/IntFilter.input";
import { IntNullableFilter } from "../../common/inputs/IntNullableFilter.input";
import { MaterialRelationFilter } from "../../material/inputs/MaterialRelationFilter.input";
import { MateriaUnitRelationFilter } from "../../materiaUnit/inputs/MateriaUnitRelationFilter.input";
import { RecipeRelationFilter } from "../../recipe/inputs/RecipeRelationFilter.input";

@NestJsGraphQL.InputType('IngredientWhereInput', { isAbstract: true })
export class IngredientWhereInput {
  @NestJsGraphQL.Field(() => [IngredientWhereInput], { nullable: true })
  AND?: IngredientWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [IngredientWhereInput], { nullable: true })
  OR?: IngredientWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [IngredientWhereInput], { nullable: true })
  NOT?: IngredientWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  id?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  materialId?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  amount?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  materiaUnitId?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => IntNullableFilter, { nullable: true })
  recipeId?: IntNullableFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @NestJsGraphQL.Field(() => MaterialRelationFilter, { nullable: true })
  material?: MaterialRelationFilter | undefined;

  @NestJsGraphQL.Field(() => MateriaUnitRelationFilter, { nullable: true })
  unit?: MateriaUnitRelationFilter | undefined;

  @NestJsGraphQL.Field(() => RecipeRelationFilter, { nullable: true })
  usedRecipe?: RecipeRelationFilter | undefined;
}
