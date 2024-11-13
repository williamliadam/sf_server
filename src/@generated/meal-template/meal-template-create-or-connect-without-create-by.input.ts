import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MealTemplateWhereUniqueInput } from './meal-template-where-unique.input';
import { Type } from 'class-transformer';
import { MealTemplateCreateWithoutCreateByInput } from './meal-template-create-without-create-by.input';

@InputType()
export class MealTemplateCreateOrConnectWithoutCreateByInput {
	@Field(() => MealTemplateWhereUniqueInput, { nullable: false })
	@Type(() => MealTemplateWhereUniqueInput)
	where!: Prisma.AtLeast<MealTemplateWhereUniqueInput, 'id'>;

	@Field(() => MealTemplateCreateWithoutCreateByInput, { nullable: false })
	@Type(() => MealTemplateCreateWithoutCreateByInput)
	create!: MealTemplateCreateWithoutCreateByInput;
}
