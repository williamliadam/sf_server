import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DishTemplateCreateManyRecipeInput } from './dish-template-create-many-recipe.input';
import { Type } from 'class-transformer';

@InputType()
export class DishTemplateCreateManyRecipeInputEnvelope {
	@Field(() => [DishTemplateCreateManyRecipeInput], { nullable: false })
	@Type(() => DishTemplateCreateManyRecipeInput)
	data!: Array<DishTemplateCreateManyRecipeInput>;

	@Field(() => Boolean, { nullable: true })
	skipDuplicates?: boolean;
}
