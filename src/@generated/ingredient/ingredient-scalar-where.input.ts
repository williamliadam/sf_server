import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class IngredientScalarWhereInput {
	@Field(() => [IngredientScalarWhereInput], { nullable: true })
	AND?: Array<IngredientScalarWhereInput>;

	@Field(() => [IngredientScalarWhereInput], { nullable: true })
	OR?: Array<IngredientScalarWhereInput>;

	@Field(() => [IngredientScalarWhereInput], { nullable: true })
	NOT?: Array<IngredientScalarWhereInput>;

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
}
