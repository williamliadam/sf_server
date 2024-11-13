import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCreateNestedOneWithoutMethodsInput } from '../recipe/recipe-create-nested-one-without-methods.input';

@InputType()
export class MethodCreateInput {
	@Field(() => String, { nullable: false })
	code!: string;

	@Field(() => String, { nullable: false })
	name!: string;

	@Field(() => String, { nullable: false })
	desc!: string;

	@Field(() => Date, { nullable: true })
	createdAt?: Date | string;

	@Field(() => Date, { nullable: true })
	updatedAt?: Date | string;

	@Field(() => RecipeCreateNestedOneWithoutMethodsInput, { nullable: true })
	usedRecipe?: RecipeCreateNestedOneWithoutMethodsInput;
}
