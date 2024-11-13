import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { IngredientCreateNestedManyWithoutUnitInput } from '../ingredient/ingredient-create-nested-many-without-unit.input';

@InputType()
export class MateriaUnitCreateInput {
	@Field(() => String, { nullable: false })
	code!: string;

	@Field(() => String, { nullable: false })
	name!: string;

	@Field(() => Int, { nullable: false })
	toKilo!: number;

	@Field(() => Date, { nullable: true })
	createdAt?: Date | string;

	@Field(() => Date, { nullable: true })
	updatedAt?: Date | string;

	@Field(() => IngredientCreateNestedManyWithoutUnitInput, { nullable: true })
	ingredients?: IngredientCreateNestedManyWithoutUnitInput;
}
