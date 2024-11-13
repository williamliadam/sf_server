import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IngredientCreateManyUnitInput } from './ingredient-create-many-unit.input';
import { Type } from 'class-transformer';

@InputType()
export class IngredientCreateManyUnitInputEnvelope {
	@Field(() => [IngredientCreateManyUnitInput], { nullable: false })
	@Type(() => IngredientCreateManyUnitInput)
	data!: Array<IngredientCreateManyUnitInput>;

	@Field(() => Boolean, { nullable: true })
	skipDuplicates?: boolean;
}
