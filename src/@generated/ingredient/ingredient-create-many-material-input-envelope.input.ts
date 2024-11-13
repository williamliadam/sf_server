import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IngredientCreateManyMaterialInput } from './ingredient-create-many-material.input';
import { Type } from 'class-transformer';

@InputType()
export class IngredientCreateManyMaterialInputEnvelope {
	@Field(() => [IngredientCreateManyMaterialInput], { nullable: false })
	@Type(() => IngredientCreateManyMaterialInput)
	data!: Array<IngredientCreateManyMaterialInput>;

	@Field(() => Boolean, { nullable: true })
	skipDuplicates?: boolean;
}
