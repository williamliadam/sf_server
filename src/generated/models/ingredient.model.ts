import * as NestJsGraphQL from "@nestjs/graphql";
import { Material } from "../models/material.model";
import { MateriaUnit } from "../models/materiaUnit.model";
import { Recipe } from "../models/recipe.model";

@NestJsGraphQL.ObjectType('Ingredient', { isAbstract: true })
export class Ingredient {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  id!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  materialId!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  amount!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  materiaUnitId!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  recipeId?: number | null;

  @NestJsGraphQL.Field(() => Date)
  createdAt!: Date;

  @NestJsGraphQL.Field(() => Date)
  updatedAt!: Date;

  material?: Material;

  unit?: MateriaUnit;

  usedRecipe?: Recipe | null;
}
