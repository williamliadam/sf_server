import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MealTemplateWhereUniqueInput } from './meal-template-where-unique.input';
import { Type } from 'class-transformer';
import { MealTemplateUpdateWithoutCreateByInput } from './meal-template-update-without-create-by.input';

@InputType()
export class MealTemplateUpdateWithWhereUniqueWithoutCreateByInput {
	@Field(() => MealTemplateWhereUniqueInput, { nullable: false })
	@Type(() => MealTemplateWhereUniqueInput)
	where!: Prisma.AtLeast<MealTemplateWhereUniqueInput, 'id'>;

	@Field(() => MealTemplateUpdateWithoutCreateByInput, { nullable: false })
	@Type(() => MealTemplateUpdateWithoutCreateByInput)
	data!: MealTemplateUpdateWithoutCreateByInput;
}
