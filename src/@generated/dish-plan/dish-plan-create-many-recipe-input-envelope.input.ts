import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DishPlanCreateManyRecipeInput } from './dish-plan-create-many-recipe.input';
import { Type } from 'class-transformer';

@InputType()
export class DishPlanCreateManyRecipeInputEnvelope {
	@Field(() => [DishPlanCreateManyRecipeInput], { nullable: false })
	@Type(() => DishPlanCreateManyRecipeInput)
	data!: Array<DishPlanCreateManyRecipeInput>;

	@Field(() => Boolean, { nullable: true })
	skipDuplicates?: boolean;
}
