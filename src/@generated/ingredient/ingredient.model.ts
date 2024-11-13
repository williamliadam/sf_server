import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Material } from '../material/material.model';
import { MateriaUnit } from '../materia-unit/materia-unit.model';
import { Recipe } from '../recipe/recipe.model';

@ObjectType()
export class Ingredient {
	@Field(() => ID, { nullable: false })
	id!: number;

	@Field(() => Int, { nullable: false })
	materialId!: number;

	@Field(() => Int, { nullable: false })
	amount!: number;

	@Field(() => Int, { nullable: false })
	materiaUnitId!: number;

	@Field(() => Int, { nullable: true })
	recipeId!: number | null;

	@Field(() => Date, { nullable: false })
	createdAt!: Date;

	@Field(() => Date, { nullable: false })
	updatedAt!: Date;

	@Field(() => Material, { nullable: false })
	material?: Material;

	@Field(() => MateriaUnit, { nullable: false })
	unit?: MateriaUnit;

	@Field(() => Recipe, { nullable: true })
	usedRecipe?: Recipe | null;
}
