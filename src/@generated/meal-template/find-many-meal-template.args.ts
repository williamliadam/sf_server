import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MealTemplateWhereInput } from './meal-template-where.input';
import { Type } from 'class-transformer';
import { MealTemplateOrderByWithRelationInput } from './meal-template-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { MealTemplateWhereUniqueInput } from './meal-template-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MealTemplateScalarFieldEnum } from './meal-template-scalar-field.enum';

@ArgsType()
export class FindManyMealTemplateArgs {
	@Field(() => MealTemplateWhereInput, { nullable: true })
	@Type(() => MealTemplateWhereInput)
	where?: MealTemplateWhereInput;

	@Field(() => [MealTemplateOrderByWithRelationInput], { nullable: true })
	orderBy?: Array<MealTemplateOrderByWithRelationInput>;

	@Field(() => MealTemplateWhereUniqueInput, { nullable: true })
	cursor?: Prisma.AtLeast<MealTemplateWhereUniqueInput, 'id'>;

	@Field(() => Int, { nullable: true })
	take?: number;

	@Field(() => Int, { nullable: true })
	skip?: number;

	@Field(() => [MealTemplateScalarFieldEnum], { nullable: true })
	distinct?: Array<keyof typeof MealTemplateScalarFieldEnum>;
}
