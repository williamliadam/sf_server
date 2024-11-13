import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DishTemplateWhereUniqueInput } from './dish-template-where-unique.input';
import { Type } from 'class-transformer';
import { DishTemplateUpdateWithoutRecipeInput } from './dish-template-update-without-recipe.input';

@InputType()
export class DishTemplateUpdateWithWhereUniqueWithoutRecipeInput {
	@Field(() => DishTemplateWhereUniqueInput, { nullable: false })
	@Type(() => DishTemplateWhereUniqueInput)
	where!: Prisma.AtLeast<DishTemplateWhereUniqueInput, 'id'>;

	@Field(() => DishTemplateUpdateWithoutRecipeInput, { nullable: false })
	@Type(() => DishTemplateUpdateWithoutRecipeInput)
	data!: DishTemplateUpdateWithoutRecipeInput;
}
