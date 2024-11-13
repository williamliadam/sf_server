import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { MaterialOrderByWithRelationInput } from '../material/material-order-by-with-relation.input';
import { MateriaUnitOrderByWithRelationInput } from '../materia-unit/materia-unit-order-by-with-relation.input';
import { RecipeOrderByWithRelationInput } from '../recipe/recipe-order-by-with-relation.input';

@InputType()
export class IngredientOrderByWithRelationInput {
	@Field(() => SortOrder, { nullable: true })
	id?: keyof typeof SortOrder;

	@Field(() => SortOrder, { nullable: true })
	materialId?: keyof typeof SortOrder;

	@Field(() => SortOrder, { nullable: true })
	amount?: keyof typeof SortOrder;

	@Field(() => SortOrder, { nullable: true })
	materiaUnitId?: keyof typeof SortOrder;

	@Field(() => SortOrderInput, { nullable: true })
	recipeId?: SortOrderInput;

	@Field(() => SortOrder, { nullable: true })
	createdAt?: keyof typeof SortOrder;

	@Field(() => SortOrder, { nullable: true })
	updatedAt?: keyof typeof SortOrder;

	@Field(() => MaterialOrderByWithRelationInput, { nullable: true })
	material?: MaterialOrderByWithRelationInput;

	@Field(() => MateriaUnitOrderByWithRelationInput, { nullable: true })
	unit?: MateriaUnitOrderByWithRelationInput;

	@Field(() => RecipeOrderByWithRelationInput, { nullable: true })
	usedRecipe?: RecipeOrderByWithRelationInput;
}
