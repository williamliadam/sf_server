import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DishTemplateWhereUniqueInput } from './dish-template-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneDishTemplateArgs {
	@Field(() => DishTemplateWhereUniqueInput, { nullable: false })
	@Type(() => DishTemplateWhereUniqueInput)
	where!: Prisma.AtLeast<DishTemplateWhereUniqueInput, 'id'>;
}
