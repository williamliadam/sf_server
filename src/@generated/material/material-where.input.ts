import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { MateriaCategoryRelationFilter } from '../materia-category/materia-category-relation-filter.input';
import { NutritionRowListRelationFilter } from '../nutrition-row/nutrition-row-list-relation-filter.input';
import { IngredientListRelationFilter } from '../ingredient/ingredient-list-relation-filter.input';

@InputType()
export class MaterialWhereInput {
	@Field(() => [MaterialWhereInput], { nullable: true })
	AND?: Array<MaterialWhereInput>;

	@Field(() => [MaterialWhereInput], { nullable: true })
	OR?: Array<MaterialWhereInput>;

	@Field(() => [MaterialWhereInput], { nullable: true })
	NOT?: Array<MaterialWhereInput>;

	@Field(() => IntFilter, { nullable: true })
	id?: IntFilter;

	@Field(() => StringFilter, { nullable: true })
	name?: StringFilter;

	@Field(() => StringFilter, { nullable: true })
	code?: StringFilter;

	@Field(() => StringFilter, { nullable: true })
	nickName?: StringFilter;

	@Field(() => IntFilter, { nullable: true })
	materiaCategoryId?: IntFilter;

	@Field(() => DateTimeFilter, { nullable: true })
	createdAt?: DateTimeFilter;

	@Field(() => DateTimeFilter, { nullable: true })
	updatedAt?: DateTimeFilter;

	@Field(() => MateriaCategoryRelationFilter, { nullable: true })
	category?: MateriaCategoryRelationFilter;

	@Field(() => NutritionRowListRelationFilter, { nullable: true })
	nutritionMatrix?: NutritionRowListRelationFilter;

	@Field(() => IngredientListRelationFilter, { nullable: true })
	ingredients?: IngredientListRelationFilter;
}
