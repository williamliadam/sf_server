import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class DishTemplateCreateManyUsedMealTemplatesInput {
	@Field(() => Int, { nullable: true })
	id?: number;

	@Field(() => Int, { nullable: false })
	recipeId!: number;

	@Field(() => Int, { nullable: false })
	amount!: number;

	@Field(() => Date, { nullable: true })
	createdAt?: Date | string;

	@Field(() => Date, { nullable: true })
	updatedAt?: Date | string;
}
