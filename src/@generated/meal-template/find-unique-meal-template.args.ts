import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MealTemplateWhereUniqueInput } from './meal-template-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueMealTemplateArgs {
	@Field(() => MealTemplateWhereUniqueInput, { nullable: false })
	@Type(() => MealTemplateWhereUniqueInput)
	where!: Prisma.AtLeast<MealTemplateWhereUniqueInput, 'id'>;
}
