import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { MaterialRelationFilter } from '../material/material-relation-filter.input';
import { MateriaUnitRelationFilter } from '../materia-unit/materia-unit-relation-filter.input';
import { RecipeNullableRelationFilter } from '../recipe/recipe-nullable-relation-filter.input';

@InputType()
export class IngredientWhereInput {
	@Field(() => [IngredientWhereInput], { nullable: true })
	AND?: Array<IngredientWhereInput>;

	@Field(() => [IngredientWhereInput], { nullable: true })
	OR?: Array<IngredientWhereInput>;

	@Field(() => [IngredientWhereInput], { nullable: true })
	NOT?: Array<IngredientWhereInput>;

	@Field(() => IntFilter, { nullable: true })
	id?: IntFilter;

	@Field(() => IntFilter, { nullable: true })
	materialId?: IntFilter;

	@Field(() => IntFilter, { nullable: true })
	amount?: IntFilter;

	@Field(() => IntFilter, { nullable: true })
	materiaUnitId?: IntFilter;

	@Field(() => IntNullableFilter, { nullable: true })
	recipeId?: IntNullableFilter;

	@Field(() => DateTimeFilter, { nullable: true })
	createdAt?: DateTimeFilter;

	@Field(() => DateTimeFilter, { nullable: true })
	updatedAt?: DateTimeFilter;

	@Field(() => MaterialRelationFilter, { nullable: true })
	material?: MaterialRelationFilter;

	@Field(() => MateriaUnitRelationFilter, { nullable: true })
	unit?: MateriaUnitRelationFilter;

	@Field(() => RecipeNullableRelationFilter, { nullable: true })
	usedRecipe?: RecipeNullableRelationFilter;
}
