import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DishTemplateWhereUniqueInput } from './dish-template-where-unique.input';
import { Type } from 'class-transformer';
import { DishTemplateUpdateWithoutRecipeInput } from './dish-template-update-without-recipe.input';
import { DishTemplateCreateWithoutRecipeInput } from './dish-template-create-without-recipe.input';

@InputType()
export class DishTemplateUpsertWithWhereUniqueWithoutRecipeInput {
	@Field(() => DishTemplateWhereUniqueInput, { nullable: false })
	@Type(() => DishTemplateWhereUniqueInput)
	where!: Prisma.AtLeast<DishTemplateWhereUniqueInput, 'id'>;

	@Field(() => DishTemplateUpdateWithoutRecipeInput, { nullable: false })
	@Type(() => DishTemplateUpdateWithoutRecipeInput)
	update!: DishTemplateUpdateWithoutRecipeInput;

	@Field(() => DishTemplateCreateWithoutRecipeInput, { nullable: false })
	@Type(() => DishTemplateCreateWithoutRecipeInput)
	create!: DishTemplateCreateWithoutRecipeInput;
}
